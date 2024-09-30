import React from 'react';

function Challenges() {
  return (
    <section>
      <h2>Challenges</h2>
      <p>
  Despite the potential benefits of mobile-based monitoring solutions, there are 
  several challenges that need to be addressed. One significant challenge is environmental 
  conditions. Poor lighting, such as during dawn, dusk, or bad weather, can severely 
  affect the accuracy of computer vision algorithms, leading to missed detections or false positives.
</p>
<p>
  Animal occlusion is another issue; when animals are partially hidden behind foliage or 
  other obstacles, the detection algorithms may fail to recognize them. This can result in 
  incomplete data, which is detrimental to conservation efforts.
</p>
<p>
  Additionally, the processing power of mobile devices can limit the complexity of the models 
  used for real-time analysis. Ensuring that the models run efficiently while maintaining 
  accuracy is a key technical hurdle.
</p>
<p>
  Finally, the battery life of mobile devices can constrain the duration of data collection 
  in the field. Finding ways to optimize battery usage and processing power is critical for 
  the success of the solution in real-world applications.
</p>

      <img src="/images/image 4.jpg" alt="Challenges" style={{ width: '100', height: '100' }} />
      <p>
        Additionally, technical limitations like mobile device processing power can slow down
        real-time analysis, and constant use of mobile cameras can drain battery life quickly.
      </p>
    </section>
  );
}

export default Challenges;

