import {
    S3Client,
    // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
    ListObjectsV2Command, PutObjectCommand
  } from "@aws-sdk/client-s3";
  
  const client = new S3Client({region: "us-east-1", credentials: {secretAccessKey: "bxxCO4qpGFNMjcxWxfRd1dc+6BTBvK7Iw2andUO/", accessKeyId: "AKIA4Y2XGPIYJFYFPPRI"}});
  //
  //
  //
  export const readFromBucket = async () => {
    const command = new ListObjectsV2Command({
      Bucket: "callitsomethingcool",
      // The default and maximum number of keys returned is 1000. This limits it to
      // one for demonstration purposes.
      MaxKeys: 1,
    });
  
    try {
      let isTruncated = true;
  
      console.log("Your bucket contains the following objects:\n")
      let contents = "";
  
      while (isTruncated) {
        const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
        const contentsList = Contents.map((c) => ` • ${c.Key}`).join("\n");
        contents += contentsList + "\n";
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
      }
      console.log(contents);
  
    } catch (err) {
      console.error(err);
    }
  };


export const createStuff = async () => {
  const command = new PutObjectCommand({
    Bucket: "callitsomethingcool",
    Key: "hello-s4.txt",
    Body: "Hello S3!",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
