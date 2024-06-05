// app/website-content/[url]/page.jsx (Server Component)
import { htmlToText } from 'html-to-text';

async function fetchWebsiteContent(url) {
  try {
    const decodedUrl = decodeURIComponent(url);
    const response = await fetch(decodedUrl);
    const html = await response.text();
    const text = htmlToText(html);
    return text;
  } catch (error) {
    console.error('Error fetching content:', error);
    return 'Error fetching content ' + JSON.stringify(error);
  }
}

const WebsiteContent = async ({ params }) => {
  const { url } = params;
  const content = await fetchWebsiteContent(url);

  return (
    <div>
      <h1>Website Content</h1>
      <pre>{content}</pre>
    </div>
  );
};

export default WebsiteContent;