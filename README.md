# AI_Image_Captions

## Caption Microservice / Backend 
This microservice receives an image file through an HTTP API call and will return a response body with a text list of descriptive captions for the image sent.

### How to REQUEST information
The only thing needed to request information from this API is a valid image file and a way of making an HTTP API call.
To request data from the microservice, follow these steps:

1. **Endpoint URL**: 
   - The microservice is accessible at: `https://ai-image-generation-405112.uk.r.appspot.com/api/caption` 
2. **Required Parameters**:
   - `param1`: A valid image file. All additional processing is handled on the backend. 
3. **Making a Request**:
   - Here's an example of how to make a request using `axios` in `node.js`:

    ```javascript
        const formData = new FormData();
        formData.append('image', imageFile);
        const response = await axios.post(`https://ai-image-generation-405112.uk.r.appspot.com/api/caption`, formData);
    ```

   - [If applicable, include examples for other tools or programming languages.]
