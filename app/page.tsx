import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter flex items-center">
        Hi👋 Everyone
      </h1>
      <p className="mb-4 text-lg">
        {`I’m Sangharsh Seth, a backend developer👨‍💻 with 4 years of experience specializing in TypeScript, microservices, and building scalable and secure systems. My expertise lies in designing and implementing robust backend solutions that handle high loads while maintaining security and efficiency. Beyond my professional work, I enjoy tackling CTF (Capture The Flag) security challenges, which keeps me sharp and up-to-date with the latest in cybersecurity.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}