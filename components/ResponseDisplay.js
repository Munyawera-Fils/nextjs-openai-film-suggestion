// File: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data && data.result) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        <h3>Similar Films:</h3>
        <ul>
          {data.result.suggestedFilms.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
