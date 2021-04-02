import Layout from '../components/Layout'

const AboutPage: React.FunctionComponent<{state: any }> = () => (
  <Layout title="About Dylan Allen | JavaScript Developer | Frontend Web">
    <div className="container">
      <h1>About</h1>

     <p>
       Hi. I am a JavaScript developer in Tulsa, OK... my name is Dylan... but you probably already knew that...
     </p>
      <p>Well anyway, you can find out more about things that I do here:</p>
      <ul>
        <li><a href="https://github.com/DylanAllen">GitHub</a></li>
        <li><a href="https://stackoverflow.com/users/story/6788666">Stack Overflow</a></li>
        <li><a href="http://reflejosflamencos.com">Reflejos Flamencos</a></li>
        <li><a href="http://flamencotulsa.com">FlamencoTulsa</a> </li>
        <li><a href="https://www.linkedin.com/in/dylanallen">LinkedIn</a></li>
      </ul>
    </div>
  </Layout>
)

export default AboutPage
