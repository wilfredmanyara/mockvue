"use client";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { BsWebcam } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { FaRegLightbulb } from "react-icons/fa";
import Link from "next/link";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  /**
   * Used to get Interview Details by MockId/Interview Id
   */
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    console.log(result);
    setInterviewData(result[0] || {}); // Initialize to an empty object if no result is found
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-xl">Let&apos;s Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-5 rounded-lg border border-blue-300 bg-blue-100 gap-5">
            <h2 className="">
              <strong>Job Position/Role:</strong>{" "}
              {interviewData?.jobPosition || "N/A"}
            </h2>
            <h2 className="">
              <strong>Job Description/Tech Stack:</strong>{" "}
              {interviewData?.jobDesc || "N/A"}
            </h2>
            <h2 className="">
              <strong>Years of Experience:</strong>{" "}
              {interviewData?.jobExperience || "N/A"}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-purple-300 bg-purple-100">
            <h2 className="flex items-center text-purple-500">
              <FaRegLightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-purple-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-2 items-center justify-center">
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <BsWebcam className="h-72 my-7 w-full p-20 bg-secondary rounded-lg border" />
              <Button variant="ghost" onClick={() => setWebCamEnabled(true)}>
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-2 items-end">
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
