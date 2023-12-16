Project can be viewed live at [https://cube-assignment-psi.vercel.app/](https://cube-assignment-psi.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the project

1. [Dog API](https://dog.ceo/dog-api/) has been used to generate random images.
2. Tech stack - NextJS, Tailwind CSS, Typescript

### Features
1. The portal has a list of customers on the left side and upon clicking a card on the left the details of the customer are shown on the right side.
2. Click on a card to highlight it and see the corresponding details on the right
3. The card in the list shows the name of the customer and his title.
4. Images update everytime a new card is chosen and every 10 seconds.
5. 10 users are shown initially. Lazy loading with infinite scroll has been implemented to show more users. The json used contains a 100 users. 
6. When the end of the user list is reached, it starts again from the beginning.

### Screenshots

<img width="1916" alt="image" src="https://github.com/Just-A-Pixel/cube-assignment/assets/58350132/cc34940b-132c-4b0c-a650-6fbb552034c7">

<img width="1920" alt="image" src="https://github.com/Just-A-Pixel/cube-assignment/assets/58350132/bf9916ea-71da-498a-932c-7a05e0476941">

