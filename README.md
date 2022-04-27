# Mixin'Dragin

Welcome to Mixin'Dragin, a workshop to learn Next.js while discovering cocktail recipes fit for a (drag) queen!

Our goal will be to work with this base application and use all of the most interesting Next.js features to turn this into a flamboyant and festive application!

## Tools at our disposal

This is a tall order, but luckily we have a lot of tools at our disposal! Let's explore what we have already in this repo:

- A [Layout component](./src/components/layout.tsx) rendering our Header. This is useful to reuse in all your pages.
- A [Database object](./src/lib/database.ts), which contains different methods to call if you want to get the recipes.
- A [Types file](./src/types.ts), where you can read about the format of the data. These types are also attached to the database object for convenient code completion!
- Various React components you can use if you don't want to create your own.

## Your mission

The drag queen convention is soon coming to town and we need to give the mixologist a recipe list of the best cocktails!

Your job will be to complete the feature list in this application:

- Page listing all the recipes.
- Page to show the details of a specific recipe.
- Way to leave comments on a recipe.
- Way to see comments on a recipe and vote on it.

To achieve success, split your work in two phases! Make sure you take the time to read the relevant documentation given in each step.

## Workshop part 1:

We will give a quick lecture on the Next.js features you need to know for the first part of this mission. After the lecture, you can take on the following tasks:

### **Task 1: Setup the environment variables to connect to Supabase.**

You will receive two environment variables that are to be consumed by Supabase. Make sure you load them in the application. The name of the variables are in the [database.ts file](./src/lib/database.ts).

Follow the [documentation](https://nextjs.org/docs/basic-features/environment-variables) if you are not sure how to do this.

After this, you should be able to run the application with :

```sh
npm install
npm run dev
```

### **Task 2: Display recipes!**

Once you have the application running, we need to get data! In the [recipes.tsx](./src/pages/recipes.tsx), there is not much for now. It is your job to get the data into this page.

In a Next page, you have 3 ways to get data:

- Using the fetch API + regular react hooks.
- Using the [getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) function (**recommended**).
- Using the [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function.

Your mission is now to get all the recipes and render them in a list inside [recipes.tsx](./src/pages/recipes.tsx). Keep things simple to start. We can get back later to make this more pretty!

### **Task 3: Routing and Navigation**

Now that can see recipes users should be able to navigate to a recipe details page. Make sure each recipe is a link to the page showing the details of the recipe.

You can use [Next/Link](https://nextjs.org/docs/api-reference/next/link) in order to make this work! Don't worry if the recipe details page is now yet working.

### **Task 4: Dynamic routes**

After you have a list of all the recipes working, we now need to give users more details about each!

For this, we will use [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes). There are ways to do this in conjunction with `getStaticProps`, but we will be using `getServerSideProps` instead to climb one step at a time!

Inside [[id.tsx]](./src/pages/recipes/%5Bid%5D.tsx), you are now tasked with fetching the right recipe and render it in the page! Read about [getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props).

**Hint: Look at Dynamic Params in the docs!**

## End of Part 1!

At this point, you now have a pretty cool application showing recipes! We will now split in two groups:

- People who want to go deeper in the previous topics and continue working on task 1 - 4.
- People interested in learning about data mutations in Next.js and using the SWR package.

Feel free to choose either group, and come back later for reviewing the parts you might not have understood.

### **Task 5: Display and fetch all comments for a recipe**

We expect our drag queen convention to be a huge event. COVID be damned, the queens are eager to get back together and spill the tea (gossip) on RuPaul!

This means that we will have a lot of comments coming in for our cocktail recipes. Under each recipe, you should now use the [SWR package](https://swr.vercel.app/) in order to get a really optimized fetching experience!

In each [[id].tsx](./src/pages/recipes/%5Bid%5D.tsx) file, make a comments section under the recipe. Limit it to the last 10 comments.

**Hint: SWR does not need to get the fetch function as a fetcher**

```
 const { data, error } = useSWR('recipe id here', 'relevant database function here')
```

### **Task 6: Create comments and show the newest one**

If you made it this far, you should be pretty comfortable already with the concepts seen so far. Now go ahead and venture on your own!

Make a component that lets users add new comments to the recipes!

### **Bonus!**

If you feel like exploring things a little bit further, try these:

- Change the recipe details page to use SSG and [getStaticPaths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths). Fetch the comments with ISR!
- implement like/unlike feature on reach recipe
- Make a section to submit new recipes.
