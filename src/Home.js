import React from 'react';

function Home() {
  return (
    <section>
      <h2>Welcome to the Wildlife Monitoring App</h2>
      <p>
        This app is designed to assist in wildlife monitoring using mobile-based
        computer vision solutions. It aims to provide real-time data collection
        in a non-invasive and efficient manner, thereby promoting the conservation of wildlife.
      </p>
      <p>
        By leveraging advanced technologies, our application enables researchers and conservationists 
        to gain immediate insights into animal populations, behaviors, and movements, which is crucial 
        for effective wildlife management.
      </p>
      <p>
        The user-friendly interface allows users to easily capture images or videos of wildlife 
        and receive instant analyses, helping to fill the gaps left by traditional monitoring methods.
      </p>

      <img src="/images/image 1.jpg" alt="Wildlife Monitoring" style={{ width: '100', height: '100' }} />
    </section>
  );
}

export default Home;
