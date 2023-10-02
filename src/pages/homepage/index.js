import { createStuff, readFromBucket } from "@/components/s3"

export default function Homepage(){
    return (<div>
        <title>This is my homepage</title>
        <h1>Homepage</h1>
        <button onClick={readFromBucket}>lolol</button>
        <button onClick={createStuff}>rofl</button>
        </div>)
}