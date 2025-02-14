import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, AutoComplete } from 'antd';
import { useRouter } from "next/router" //!!! permet de créer une route vers une "nouvelle page url" en lien avec la ligne 23 et 54


function Home() {
  // Etat SignIn
  const [usernameSignIn, setUsernameSignIn] = useState("")
  const [passwordSignIn, setpasswordSignIn] = useState("")

  // Etat SignUp
  const [firstnameSignUp, setFirstnameSignUp] = useState("")
  const [usernameSignUp, setUsernameSignUp] = useState("")
  const [passwordSignUp, setPasswordSignUp] = useState("")

  console.log(firstnameSignUp)
  console.log(usernameSignUp)
  console.log(passwordSignUp)

  const router = useRouter()

  // useEffect(() => {

  // })

  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname: firstnameSignUp, username: usernameSignUp, password: passwordSignUp }),
    }).then(response => response.json())
      .then(data => {
        console.log('Réponse du serveur :', data)

        // reset l'input à 0 lignes 94 95 96
        setFirstnameSignUp('');
        setUsernameSignUp('');
        setPasswordSignUp('');
      })
  };

  const handleLogin = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usernameSignIn, password: passwordSignIn }),
    }).then(response => response.json())
      .then(data => {
        console.log('Réponse du serveur :', data)
        router.push("/home")
        setUsernameSignIn('');
        setpasswordSignIn('');
      })

  }

  // const handleRegister = () => {
  //   fetch('http://localhost:3000/users/signup', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ firstname: firstname, username: username, password: password }),
  //       }).then(response => response.json())
  //         .then(data => {
  //           if (data.result) {
  //             setFirstnameSignUp('');
  //             setUsernameSignUp('');
  //             setPasswordSignUp('');
  //           };
  //         })
  // };




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
            <br />
            <input type="text" placeholder="username" value={usernameSignIn} onChange={(e) => setUsernameSignIn(e.target.value)} /> <br />
            <input type="text" placeholder="password" value={passwordSignIn} onChange={(e) => setpasswordSignIn(e.target.value)} /> <br />
            <Button type="primary" onClick={() => handleLogin()} className={styles.button}>Sign In</Button>
            <br />
            <br />

            <input type="text" placeholder="firstname" value={firstnameSignUp} onChange={(e) => setFirstnameSignUp(e.target.value)} /> <br />
            <input type="text" placeholder="username" value={usernameSignUp} onChange={(e) => setUsernameSignUp(e.target.value)} /> <br />
            <input type="text" placeholder="password" value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} /> <br />
            <Button onClick={() => handleRegister()} className={styles.button}>Sign Up</Button>
          </div>
        </div>
      </main>
    </div >
  );
}

export default Home;
