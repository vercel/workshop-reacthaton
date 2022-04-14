# Mixin'Dragin

Welcome to Mixin'Dragin! A workshop to learn Next.js while discovering cocktail recipes fit for a (drag)Queen!

Our goal will be to work with this base application and use all of the most interesting Next.js features to turn this into a flamboyant and festive application!

## Tools at our disposal

This is a tall order but luckilly we have a lot of tools at our disposal! Lets explore what we have already in this repo:

- A [Layout component](./components/layout.tsx) rendering our Header. This is useful to reuse in all your pages.
- A [Database object](./lib/database.ts) it contains different methods to call if you want to get the recipes.
- A [Types file](./types.ts) where you can read about the format of the data. These types are also attached to the database object for convenient code completion!

## Your mission

The Drag queen convention is soon coming to town and we need to give the mixosologist a recipe list of the best cocktails!

Your job will be to complete the feature list in this application:

- a page listing all the recipes
- a page to show the details of a specific recipe
- A way to leave comments on a recipe
- a way to see comments on a recipe and vote on it.

To achieve success split your work in two phases!

## Workshop part 1:

We will give a quick lecture on the Next.js features you need to know for the first part of this mission. After the lecture, you can take on the following tasks:

### **Task 1: Settup the environment variables to connect to Supabase.**

You will receive two environment variables that are to be consumed by Supabase. Make sure you load them in the application. The name of the variables are in the [database.ts file](./lib/database.ts)

Follow the [documentation](https://nextjs.org/docs/basic-features/environment-variables) if you are not sure how to do this.

After this you should be able to run the application with :

```sh
npm install
npm run dev
```

### **Task 2: Display recipes!**

Once you have the application running we need to get data! in the [recipes.tsx](./pages/recipes.tsx), there is for now not much. It is your job to get the data into this page.

In a Next page, you have 3 ways to get data:

- using Fetch + regular react hooks
- using the [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) function (**recommended**)
- using the [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function

Your mission is now to get all the recipes and render them in a list in [recipes.tsx](./pages/recipes.tsx). Keep things simple to start, we can get back later to make this more pretty!

### **Task 3: Dynamic routes**

After you have a list of all the recipes working, we need now to give users more details about each!

For this we will use [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes). There are ways to do this in conjunction with `getStaticProps` but we will be using instead `getServerSideProps` to climb the steps one at a time!

Inside [[id.tsx]](./pages/recipes/%5Bid%5D.tsx) you are now tasked with fetching the right recipe and render it in the page! Read about [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props). If you need help doing this.
s

**hint: look at dynamic params in the docs!**

### **Task 4:Navigation**

Next.js is awesome at making smooth transitions between pages. Your last task before the break is simple.

In the [recipes.tsx](./pages/recipes.tsx) file, Change each recipe into a link to the proper recipe page we built in Task 3.

**Hint use next/link to do so!**: [Docs](https://nextjs.org/docs/api-reference/next/link)

## End of Part1!

At this point you now have a pretty cool application showing recipes! We will now split in two groups:

- People who want to go deeper in the previous topics and continue working on task 1-4
- People interested in Learning about data mutations in next.js and using the SWR package.

Feel free to choose either group and come back later for reviewing parts you might not have understood.

### **Task 5: Display and fetch all comments for a recipe**

We expect our drag queen convention to be a huge event. COVID be damned, the queens are eager to get back together and gossip about Rupaul!

This means we will have a lot of comments coming in for our cocktail recipes. Under each recipe you should now use the [SWR package](https://swr.vercel.app/) in order to get a really optimized fetching experience!

In each [[id].tsx](./pages/recipes/%5Bid%5D.tsx) file, make a comments section under the recipe. Limit it to the last 10 comments.

**hint: SWR does not need to get the fetch function as a fetcher**

```
 const { data, error } = useSWR('recipe id here', 'relevant database function here')
```

### **Task 6: Create coments and show the newest one**

If you made it this far you should be pretty comfortable already with the concepts seen so far. Now go ahead and venture on your own!

Make a component that lets users add new comments to the recipes!
