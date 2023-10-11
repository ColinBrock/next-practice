import {
    S3Client,
    // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
    ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand, CreateBucketCommand
  } from "@aws-sdk/client-s3";

  import { myAccessKey,mySecretAccessKey } from "../../authentication";
  
  const client = new S3Client({region: "us-east-1", credentials: {accessKeyId: myAccessKey, secretAccessKey: mySecretAccessKey}});
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
        const response = await client.send(command);
        contents += contentsList + "\n";
        isTruncated = IsTruncated;
        command.input.ContinuationToken = NextContinuationToken;
        console.log(response);
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


export const deleteStuff = async () => {
  const command = new DeleteObjectCommand({
    Bucket: "callitsomethingcool",
    Key: "hello-s4.txt",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};




export const makeBucket = async () => {
  const command = new CreateBucketCommand({
    // The name of the bucket. Bucket names are unique and have several other constraints.
    // See https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html
    Bucket: "bucket-name",
  });

  try {
    const { Location } = await client.send(command);
    console.log(`Bucket created with location ${Location}`);
  } catch (err) {
    console.error(err);
  }
};
