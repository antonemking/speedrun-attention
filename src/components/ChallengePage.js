import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // For rendering raw HTML
import rehypeSanitize from 'rehype-sanitize'; // For sanitizing HTML
import EmailCapture from './EmailCapture'; // Ensure you have this component for capturing emails

// Mapping of challenge IDs to branch names
const challengeBranches = {
  1: 'challenge-0',
  // Add more mappings as needed
};

function ChallengePage() {
    const { id } = useParams();
    const [readmeContent, setReadmeContent] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchReadme = async () => {
        try {
          const branchName = challengeBranches[id];
          if (!branchName) {
            setError('Challenge not found.');
            return;
          }
  
          const apiUrl = `https://raw.githubusercontent.com/antonemking/at-challenges/${branchName}/README.md`;
  
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch README.');
          }
          const text = await response.text();
  
          // Adjust image URLs if necessary
          const adjustedText = adjustImageUrls(text, branchName);
          setReadmeContent(adjustedText);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchReadme();
    }, [id]);
  
    // Function to adjust image URLs if needed
    const adjustImageUrls = (markdown, branchName) => {
      const repoUrl = 'https://raw.githubusercontent.com/antonemking/at-challenges';
      return markdown.replace(
        /!\[(.*?)\]\((?!http)(.*?)\)/g,
        `![$1](${repoUrl}/${branchName}/$2)`
      );
    };
  
    if (error) {
      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4 font-retro">Error</h1>
          <p className="text-red-500">{error}</p>
        </div>
      );
    }
  
    if (!readmeContent) {
      return (
        <div className="container mx-auto px-4 py-12">
          <p>Loading...</p>
        </div>
      );
    }
  
    return (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSanitize]}
              className="prose lg:prose-xl"
            >
              {readmeContent}
            </ReactMarkdown>
    
            {/* Add the EmailCapture component after the challenge content */}
            <div className="email-capture-section mt-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Enjoyed Challenge 0?</h2>
              <p className="mb-6 text-lg">Sign up to be notified when Challenge 2 is ready!</p>
    
              {/* Render the EmailCapture component */}
              <div className="max-w-md mx-auto">
                <EmailCapture />
              </div>
            </div>
          </div>
        </div>
      );
  }

export default ChallengePage;
