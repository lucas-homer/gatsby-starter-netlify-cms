import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ReactAudioPlayer from "react-audio-player";
import Layout from "../../components/Layout";

export default function Tweets() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <div style={{ width: "50%" }}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="patstrathman"
                options={{ height: 400 }}
              />
            </div>
            <div>
              <h3>Football dot mp3</h3>
              <ReactAudioPlayer
                autoPlay={false}
                controls
                src="https://s3.amazonaws.com/staa/Strathman/Football1.mp3"
                style={{
                  width: "600px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
