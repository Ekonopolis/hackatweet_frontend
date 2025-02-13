import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, AutoComplete, Space } from 'antd';






function Home() {
  const handleClick = () => {
    console.log('Click detected')
  };




  return (
    <div>
      <main className={styles.main} >
        <div className={styles.leftDiv}>
          <Image src="/twittos.jpg" alt="twittos" width={600} height={700} />
        </div>
        <div className={styles.rightDiv}>
          <h1 className={styles.title}>
            See what's happening
          </h1>
          <p>Join Hackatweet today.
          </p>
          <div>
            <Button type="primary" onClick={() => handleClick()} className={styles.button}>Sign In</Button>
            <br />
            <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" />
          <br />
          <br />
            <Button onClick={ () => handleClick()} className={styles.button}>Sign Up</Button> <br />
            <input type="text" placeholder="firstname" /> <br />
          <input type="text" placeholder="username" /> <br />
          <input type="text" placeholder="password" />
          </div>
        </div>
      </main>
    </div >
  );
}

export default Home;
