import React from 'react'
import './AboutMe.css'
import profileImage from './asset/profile image.jpeg'

function AboutMe() {
    function getAge() {
        const birthDate = new Date('2002-09-16')
        const today = new Date()

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age
    }

    function getBold(text: string) {
        return <span className={'bold'}>{text}</span>
    }

    function getLink(text: string, link: string) {
        return (
            <a className={'about-me-link'} href={link} target={'_blank'} rel={'noreferrer'}>
                {getBold(text)}
            </a>
        )
    }

    return (
        <div id={'about-me'}>
            <div id={'about-me-text'}>
                <p id={'title'}>Hi there! I'm Amir Mohammad 👋🏻</p>

                <p className={'about-me-paragraph'}>
                    First of all, {getBold('Laugh at Life')} and welcome to my website {getBold(':)')}
                </p>

                <p className={'about-me-paragraph'}>
                    I’m {getBold('Amir Mohammad Fakhimi')}, born in the beautiful city of Kashan, and currently{' '}
                    {getBold(String(getAge()))} years old.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    In 2020, I began my {getBold('undergraduate')} studies in {getBold('Computer Engineering')}{' '}
                    at the prestigious {getLink('Sharif University of Technology', 'https://en.sharif.edu')}, the
                    top-ranked university in Iran according to the{' '}
                    {getLink(
                        'QS World University Rankings 2026',
                        'https://www.topuniversities.com/universities/sharif-university-technology'
                    )}.
                </p>

                <p className={'about-me-paragraph'}>
                    I received my {getBold('B.Sc. in Computer Engineering')} from Sharif University of Technology
                    with a GPA of {getBold('18.72/20')}. During my studies, I completed advanced coursework in
                    areas such as {getBold('Natural Language Processing')}, {getBold('Deep Learning')},{' '}
                    {getBold('Reinforcement Learning')}, {getBold('Advanced Information Retrieval')},{' '}
                    {getBold('Machine Learning')}, {getBold('Artificial Intelligence')},{' '}
                    {getBold('Fundamentals of 3D Computer Vision')}, {getBold('Linear Algebra')}, and{' '}
                    {getBold('Probability & Statistics')}.
                </p>

                <p className={'about-me-paragraph'}>
                    My interests are centered around {getBold('Artificial Intelligence')}, especially{' '}
                    {getBold('Natural Language Processing')}, {getBold('Computer Vision')},{' '}
                    {getBold('Deep Learning')}, and {getBold('Machine Learning')}. I am particularly interested in
                    building and evaluating reliable AI systems, studying how LLMs reason, and exploring problems
                    where language, vision, and learning meet.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    On the research side, I have contributed to several AI-focused projects:
                </p>

                <ul className={'about-me-list'}>
                    <li className={'about-me-list-item'}>
                        At {getLink('Nanyang Technological University', 'https://www.ntu.edu.sg')}, I am working
                        on a {getBold('Prompt Refinement System for LLM Workflows')} under the supervision of
                        Prof. Chng Eng Siong. This project focuses on prompt optimization, human-in-the-loop
                        refinement, correction-driven improvement, error attribution, delta extraction, structured
                        prompt updates, and evaluation frameworks.
                    </li>

                    <li className={'about-me-list-item'}>
                        At {getLink('Qatar Computing Research Institute', 'https://www.hbku.edu.qa/en/qcri')}, I
                        am working on {getBold('Number Understanding in LLMs')} under the supervision of
                        Dr. Ehsaneddin Asgari. We built a multilingual benchmark for numeric reasoning across{' '}
                        {getBold('four domains')} and {getBold('four languages')}, generated almost{' '}
                        {getBold('1.2M multiple-choice prompts per language')}, and evaluated open-source LLMs
                        such as Gemma, Llama, and Qwen.
                    </li>

                    <li className={'about-me-list-item'}>
                        At {getLink('Sharif University of Technology', 'https://en.sharif.edu')}, I worked on{' '}
                        {getBold('Abductive Reasoning in LLMs')} with Dr. Mohammad Hossein Rohban and Dr. Mahdi
                        Jafari Siavoshani. I reviewed {getBold('50 papers')}, cataloged{' '}
                        {getBold('30 abductive-reasoning datasets')}, and ran{' '}
                        {getBold('70 model-dataset evaluations')} to study recurring reasoning failure modes.
                    </li>

                    <li className={'about-me-list-item'}>
                        I contributed to an {getBold('AI-Driven Referee Recommendation System')} for{' '}
                        {getLink('Scientia Iranica Journal', 'https://scientiairanica.sharif.edu')} under the
                        supervision of Dr. Shohreh Kasaei. In this project, I developed LLM-based components for
                        reviewer recommendation and automated expertise profiling from publication records to
                        support editorial workflows.
                    </li>

                    <li className={'about-me-list-item'}>
                        I also worked on a survey about{' '}
                        {getBold('Compositional Problems in Stable Diffusion Models')} with Dr. Mahdieh
                        Soleymani Baghshah and Dr. Mohammad Hossein Rohban. We studied compositional failures in
                        diffusion-based generation, including object relations, spatial consistency, and scale.
                    </li>
                </ul>

                <br/>

                <p className={'about-me-paragraph'}>
                    On the industry side, I have experience in both {getBold('AI engineering')} and{' '}
                    {getBold('software development')}.
                </p>

                <ul className={'about-me-list'}>
                    <li className={'about-me-list-item'}>
                        As an {getBold('Artificial Intelligence Intern')} at{' '}
                        {getLink('Sokhan AI', 'https://sokhan.ai')}, I worked on Persian ASR using Whisper,
                        building an end-to-end fine-tuning and evaluation pipeline on public and proprietary
                        Persian datasets. This work achieved an approximately {getBold('10% WER reduction')}{' '}
                        compared to prior baselines, with automated metric tracking and benchmark reporting.
                    </li>

                    <li className={'about-me-list-item'}>
                        During this internship, I also contributed a merged{' '}
                        {getLink(
                            'Hugging Face Transformers pull request',
                            'https://github.com/huggingface/transformers'
                        )}{' '}
                        with tests, adding Whisper label-length validation to help prevent silent training
                        failures.
                    </li>

                    <li className={'about-me-list-item'}>
                        As a {getBold('Software Development Intern')} at{' '}
                        {getLink('Rahnema College', 'https://rahnemacollege.com')}, I was selected from almost{' '}
                        {getBold('900 participants')} for a Tapsi-sponsored software engineering bootcamp. I
                        trained across front-end, back-end, mobile, and DevOps, and built the front-end for a
                        fantasy football product in a team of six.
                    </li>
                </ul>

                <br/>

                <p className={'about-me-paragraph'}>
                    I have also worked on several selected projects:
                </p>

                <ul className={'about-me-list'}>
                    <li className={'about-me-list-item'}>
                        {getBold('LLMs’ Citation Benchmark')}: an end-to-end evaluation pipeline for
                        citation-grounded generation, including generation, evidence retrieval, and scoring.
                    </li>

                    <li className={'about-me-list-item'}>
                        {getBold('Llama 3 LoRA Fine-Tuning')}: LoRA fine-tuning on a gender-neutralization
                        dataset.
                    </li>

                    <li className={'about-me-list-item'}>
                        {getBold('Amoogle')}: an advanced information retrieval pipeline with BM25, vector-space
                        retrieval, learning-based components, a Semantic Scholar crawler, personalized PageRank, a
                        recommender pipeline, and a UI.
                    </li>
                </ul>

                <br/>

                <p className={'about-me-paragraph'}>
                    Beyond research and engineering, I have been deeply involved in {getBold('teaching and service')}.
                    I have served as a teaching assistant for many courses at Sharif University of Technology,
                    including head or lead roles in {getBold('Database Design')}, {getBold('Mobile Programming')},{' '}
                    {getBold('Advanced Programming')}, and {getBold('Fundamentals of Programming')}. I have also
                    been a TA for courses such as {getBold('Natural Language Processing')},{' '}
                    {getBold('Generative Models')}, {getBold('Machine Learning')},{' '}
                    {getBold('Advanced Information Retrieval')}, {getBold('Artificial Intelligence')},{' '}
                    {getBold('Linear Algebra')}, and {getBold('Probability & Statistics')}.
                </p>

                <p className={'about-me-paragraph'}>
                    I also served as an {getBold('Instructor in the NLP Team')} for the IOAI Preparation Program,
                    where I delivered NLP sessions and created theory notes and hands-on notebooks. In addition, I
                    contributed to outreach programs with Sharif University of Technology and Quera, supporting
                    around {getBold('2000 students')} with almost {getBold('100 staff members')} and being
                    recognized as a {getBold('top mentor')}.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    Some of my honors include being selected as a{' '}
                    {getBold('Direct Master’s Program Candidate in AI')} at Sharif University of Technology,
                    representing Sharif as a member of the {getBold('Table Tennis Team')} at the 16th National
                    Students’ Sports Olympiad, and earning {getBold('2nd place')} and {getBold('3rd place')} in
                    Sharif University of Technology Table Tennis Championships.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    Technically, I work with {getBold('Python')}, {getBold('TypeScript/JavaScript')},{' '}
                    {getBold('Java')}, {getBold('Swift')}, {getBold('C')}, and {getBold('SQL')}. My main tools
                    include {getBold('PyTorch')}, {getBold('TensorFlow')}, {getBold('Hugging Face')},{' '}
                    {getBold('scikit-learn')}, {getBold('OpenCV')}, {getBold('NLTK')}, {getBold('NumPy')},{' '}
                    {getBold('Pandas')}, {getBold('Matplotlib')}, {getBold('Plotly')}, {getBold('FastAPI')},{' '}
                    {getBold('Node.js')}, {getBold('PostgreSQL')}, {getBold('Redis')}, {getBold('React.js')},{' '}
                    {getBold('Next.js')}, {getBold('Linux')}, {getBold('Git')}, and {getBold('Docker')}.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    Looking forward, I am excited to keep developing my expertise in {getBold('Deep Learning')},
                    continue exploring {getBold('LLM reasoning and evaluation')}, and build AI systems that are
                    useful, reliable, and maybe even less chaotic than the average software dependency tree.
                </p>

                <br/>

                <p className={'about-me-paragraph'}>
                    And remember, {getBold('there is always a reason to smile')}! 😊
                </p>
            </div>

            <img id={'profile-image'} src={profileImage} alt={'my profile'}/>
        </div>
    )
}

export default AboutMe