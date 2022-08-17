const newFormHandler = async (event) => {
    event.preventDefault();
    const url = document.location.href
    console.log(url)
    const lastSegment = url.split("/").pop()
    console.log(lastSegment)
    const description = document.querySelector('#comment-desc').value.trim();
  
    if (description) {
      const response = await fetch(`/api/comment/${lastSegment}`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  