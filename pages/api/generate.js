
const generateAction = async(req,res)=>{
    console.log('Received Request')
    const input = JSON.parse(req.body).input; // parse the received request & get input from it

    //use the input & call hugging face to receive the image

    //Fetch to hugging face
    const url = 'https://api-inference.huggingface.co/models/ayushunleashed/ayushyadavdb'
    const response = await fetch(url,
        {
            method: 'POST',
            headers:{ 
                Autorization: 'Bearer ${process.env.HF_AUTH_KEY}', //passing API Key, stored encrypted
                'Content-Type':'application/json' //server will return json
            },
            body:JSON.stringify({
                input: input, //passing a variable named input inside body
            }),
        }
    );

    
};



export default generateAction;