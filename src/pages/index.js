import Head from 'next/head'
import Bio from '../components/Bio'
import Post from '../components/Post'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot='https://pbs.twimg.com/profile_images/1433788266503933956/_B-uvw06_400x400.jpg'
          name='Micke Adenugba'
          tagline='Helping others to learn by doing!'
          role='Frontend Developer @ Foodbuck'
        />

        <ul className={styles.posts}>
          <li>
            <Post content="Hey, I'm a new post!" date='11/2/2022' />
          </li>
          <li>
            <Post
              content='I’m working in Figma trying to design a new w
              bsite that shows all of
              my tweets!'
              date='11/2/2022'
            />
          </li>
          <li>
            <Post
              content='I’m working in Figma trying to design a new website that shows all of
              my tweets!'
              date='11/2/2022'
            />
          </li>
          <li>
            <Post
              content='I’m working in Figma trying to design a new website that shows all of
              my tweets!'
              date='11/2/2022'
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  )
}
