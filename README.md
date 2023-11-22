# AI_Image_Captions

## Caption Microservice / Backend 
This microservice receives an image file through an HTTP API call and will return a response body with a text list of descriptive captions for the image sent.

### How to REQUEST information
This microservice is accessed by a HTTP API POST.
To request data from the microservice, follow these steps:

1. **Endpoint URL**: 
   - `https://ai-image-generation-405112.uk.r.appspot.com/api/caption` 
2. **Required Parameters**:
   - `param1`: A FormData object with an added key/value pair that is 'image':imagefile (the image file you are uploading)
3. **Making a Request**:
   - Here's an example of how to make a request using `axios` in `node.js`:

    ```javascript
        const formData = new FormData();
        formData.append('image', imageFile);
        const response = await axios.post(`https://ai-image-generation-405112.uk.r.appspot.com/api/caption`, formData);
        
        caption = response.data.caption
       
    ```

### How to RECEIVE information
The data will be returned in the response body of the POST request,
stored under the pathing response.data.caption, as seen in the above example call. It is a string, a comma seperated list of all descriptors of the image that have been generated. 

Store this string in response.data.caption and use it any way you'd like!
