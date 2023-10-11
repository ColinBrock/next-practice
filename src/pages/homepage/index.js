import {  createStuff, deleteStuff, readFromBucket, makeBucket } from "@/components/s3"

export default function Homepage(){
    return (<div>
        <title>This is my homepage</title>
        <h1>Homepage</h1>
        <button onClick={readFromBucket}>lolol</button>
        <button onClick={createStuff}>rofl</button>
        <button onClick={deleteStuff}>omg delete</button>
        <button onClick={makeBucket}>Make Bucket</button>
        </div>)
}