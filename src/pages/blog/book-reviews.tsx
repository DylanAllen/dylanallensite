import Layout from '../../components/Layout'
import Picture from '../../components/Picture';
import Comments from '../../components/Comments';
import React from 'react';

const BookReviews: React.FunctionComponent<{ state: any }> =  () => {

  return (
    <Layout title={`${meta.title} | Dylan Allen | JavaScript Developer | Frontend Web`} image={meta.image} description={meta.description}>
      <div className="container">
        <h1>{meta.title}</h1>
        <Picture
          src={meta.image}
          style={{ width: '100%', height: '45vw', maxHeight: '700px' }}
          caption={<>
            photo by <a href="https://kaboompics.com/" target="_blank" rel="nofollow">Karolina Grabowska</a>
          </>}
          layoutId={`post-${meta.slug}`}
        ></Picture>
        <p>
          I started at Moov Financial in October with not a whole lot of fintech experience, and no startup experience. I wanted to close my knowledge gap fast, so I have been on a reading rampage ever since.
          Moov has a list of recommended books on payments, management, startups, devops, and other relevant topics. I have really enjoyed most of the books (gotta be honest, Payments Systems in the U.S. was important but not fun), and learned a lot.
          The next few posts will be my thoughts on some of these books. 
        </p>
        <h3>
          The goal of these posts
        </h3>
        <ul>
          <li>
            Review and re-process the content to help myself better undestand and commit to memory the concepts covered
          </li>
          <li>
            Share my favorite nuggets of wisdom with whoever is curious enough to read my posts
          </li>
        </ul>
        <h3>
          Books I plan to review
        </h3>
        <ul>
          <li>
            <a href="https://nicolefv.com/book" target="_blank" rel="nofollow">Accelerate</a> by Nicole Forsgren PhD, Jez Humble, and Gene Kim
          </li>
          <li>
            <a href="http://growth.eladgil.com/" target="_blank" rel="nofollow">High Growth Handbook</a> by Elad Gil
          </li>
          <li>
            <a href="https://www.whatmatters.com/the-book/" target="_blank" rel="nofollow">Measure What Matters</a> by John Doerr
          </li>
          <li>
            <a href="http://hardthings.bhorowitz.com" target="_blank" rel="nofollow">The Hard Thing About Hard Things</a> by Ben Horowitz
          </li>
          <li>
            <a href="https://www.barnesandnoble.com/w/payments-systems-in-the-us-third-edition-carol-coye-benson/1132644392" target="_blank" rel="nofollow">Payments Systems in the U.S.</a> by Carol Coye Benson, Scott Loftesness, Russ Jones (this one is a maybe)
          </li>
        </ul>
       
        <Comments slug={meta.slug}></Comments>
      </div>
    </Layout>
  )
}

export const meta = {
  title: 'Book Reviews',
  description: 'I started at Moov Financial in October with not a whole lot of fintech experience, and no startup experience. I wanted to close my knowledge gap fast, so I have been on a reading rampage ever since. The next few posts will be my thoughts on some of these books.',
  image:  '/karolina-grabowska-books.jpg',
  slug: 'book-reviews',
  date: new Date(2021, 1, 2)
}

export default BookReviews;