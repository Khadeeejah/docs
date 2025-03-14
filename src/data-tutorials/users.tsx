/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | "popular"
  | "favorite"
  | "foundation"
  | "celosage"
  | "figment"
  | "dacade"
  | "advanced"
  | "airdrop"
  | "android"
  | "beginner"
  | "celo"
  | "celowallet"
  | "cli"
  | "codeplayground"
  | "composer"
  | "contractkit"
  | "contribute"
  | "crowdfunding"
  | "cusd"
  | "dao"
  | "dapp"
  | "dappstarter"
  | "deploy"
  | "erc1155"
  | "ERC20"
  | "erc721"
  | "flutter"
  | "graph"
  | "hardhat"
  | "html"
  | "intermediate"
  | "ipfs"
  | "javascript"
  | "keystores"
  | "ledger"
  | "materialui"
  | "metamask"
  | "mint"
  | "mobile"
  | "nextjs"
  | "nft"
  | "nodejs"
  | "observable"
  | "openzeppelin"
  | "oracle"
  | "pinata"
  | "progressive"
  | "randomness"
  | "react"
  | "reactnative"
  | "remix"
  | "remote"
  | "sdk"
  | "smartcontract"
  | "solidity"
  | "sourcify"
  | "subgraphs"
  | "tokens"
  | "truffle"
  | "typescript"
  | "usecontractkit"
  | "valora"
  | "verification"
  | "walletconnect"
  | "video";

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string;
  // source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: { [type in TagType]: Tag } = {
  // DO NOT USE THIS TAG: we choose sites to add to appss
  popular: {
    label: translate({ message: "Popular" }),
    description: translate({
      message: "",
      id: "showcase.tag.popular.description",
    }),
    color: "#e9669e",
  },

  // For open-source sites, a link to the source code is required
  // The source should be your *website's* source, not your project's source!
  // apps: {
  //   label: translate({ message: "Apps" }),
  //   description: translate({
  //     message: "",
  //     id: "showcase.tag.apps.description",
  //   }),
  //   color: "#39ca30",
  // },
  // impact: {
  //   label: translate({ message: "Impact" }),
  //   description: translate({
  //     message: "",
  //     id: "showcase.tag.impact.description",
  //   }),
  //   color: "#dfd545",
  // },
  foundation: {
    label: translate({ message: "Foundation" }),
    description: translate({
      message: "",
      id: "showcase.tag.foundation.description",
    }),
    color: "#35D07F",
  },
  celosage: {
    label: translate({ message: "Celo Sage" }),
    description: translate({
      message: "",
      id: "showcase.tag.celosage.description",
    }),
    color: "#35D07F",
  },
  favorite: {
    label: translate({ message: "Favorite" }),
    description: translate({
      message: "",
      id: "showcase.tag.favorite.description",
    }),
    color: "#35D07F",
  },

  figment: {
    label: translate({ message: "Figment" }),
    description: translate({
      message: "",
      id: "showcase.tag.figment.description",
    }),
    color: "#FBCC5C",
  },
  dacade: {
    label: translate({ message: "Dacade" }),
    description: translate({
      message: "",
      id: "showcase.tag.dacade.description",
    }),
    color: "#35D07F",
  },
  advanced: {
    label: translate({ message: "Advanced" }),
    description: translate({
      message: "",
      id: "showcase.tag.advanced.description",
    }),
    color: "#35D07F",
  },
  airdrop: {
    label: translate({ message: "Airdrop" }),
    description: translate({
      message: "",
      id: "showcase.tag.airdrop.description",
    }),
    color: "#127f82",
  },
  android: {
    label: translate({ message: "Android" }),
    description: translate({
      message: "",
      id: "showcase.tag.android.description",
    }),
    color: "#BF97FF",
  },
  beginner: {
    label: translate({ message: "Beginner" }),
    description: translate({
      message: "",
      id: "showcase.tag.beginner.description",
    }),
    color: "#FB7C6D",
  },
  celo: {
    label: translate({ message: "Celo" }),
    description: translate({
      message: "",
      id: "showcase.tag.celo.description",
    }),
    color: "#73DDFF",
  },
  celowallet: {
    label: translate({ message: "Celo Wallet" }),
    description: translate({
      message: "",
      id: "showcase.tag.celowallet.description",
    }),
    color: "#3488EC",
  },
  cli: {
    label: translate({ message: "CLI" }),
    description: translate({
      message: "",
      id: "showcase.tag.cli.description",
    }),
    color: "#BF97FF",
  },
  codeplayground: {
    label: translate({ message: "Code Playground" }),
    description: translate({
      message: "",
      id: "showcase.tag.codeplayground.description",
    }),
    color: "#35D07F",
  },
  composer: {
    label: translate({ message: "Composer" }),
    description: translate({
      message: "",
      id: "showcase.tag.composer.description",
    }),
    color: "#FB7C6D",
  },
  contractkit: {
    label: translate({ message: "ContractKit" }),
    description: translate({
      message: "",
      id: "showcase.tag.contractkit.description",
    }),
    color: "#FBCC5C",
  },
  contribute: {
    label: translate({ message: "Contribute" }),
    description: translate({
      message: "",
      id: "showcase.tag.contribute.description",
    }),
    color: "#FBCC5C",
  },
  crowdfunding: {
    label: translate({ message: "Crowdfunding" }),
    description: translate({
      message: "",
      id: "showcase.tag.crowdfunding.description",
    }),
    color: "#BF97FF",
  },
  cusd: {
    label: translate({ message: "cUSD" }),
    description: translate({
      message: "",
      id: "showcase.tag.cusd.description",
    }),
    color: "#FB7C6D",
  },
  dao: {
    label: translate({ message: "DAO" }),
    description: translate({
      message: "",
      id: "showcase.tag.dao.description",
    }),
    color: "#73DDFF",
  },
  dapp: {
    label: translate({ message: "Dapp" }),
    description: translate({
      message: "",
      id: "showcase.tag.dapp.description",
    }),
    color: "#3488EC",
  },
  dappstarter: {
    label: translate({ message: "Dappstarter" }),
    description: translate({
      message: "",
      id: "showcase.tag.dappstarter.description",
    }),
    color: "#35D07F",
  },
  deploy: {
    label: translate({ message: "Deploy" }),
    description: translate({
      message: "",
      id: "showcase.tag.deploy.description",
    }),
    color: "#FBCC5C",
  },
  erc1155: {
    label: translate({ message: "erc1155" }),
    description: translate({
      message: "",
      id: "showcase.tag.erc1155.description",
    }),
    color: "#BF97FF",
  },
  ERC20: {
    label: translate({ message: "ERC20" }),
    description: translate({
      message: "",
      id: "showcase.tag.erc20.description",
    }),
    color: "#BF97FF",
  },
  erc721: {
    label: translate({ message: "ERC721" }),
    description: translate({
      message: "",
      id: "showcase.tag.erc721.description",
    }),
    color: "#FB7C6D",
  },
  flutter: {
    label: translate({ message: "flutter" }),
    description: translate({
      message: "",
      id: "showcase.tag.flutter.description",
    }),
    color: "#73DDFF",
  },
  graph: {
    label: translate({ message: "Graph" }),
    description: translate({
      message: "",
      id: "showcase.tag.graph.description",
    }),
    color: "#3488EC",
  },
  hardhat: {
    label: translate({ message: "Hardhat" }),
    description: translate({
      message: "",
      id: "showcase.tag.hardhat.description",
    }),
    color: "#FB7C6D",
  },
  html: {
    label: translate({ message: "HTML" }),
    description: translate({
      message: "",
      id: "showcase.tag.html.description",
    }),
    color: "#35D07F",
  },
  intermediate: {
    label: translate({ message: "Intermediate" }),
    description: translate({
      message: "",
      id: "showcase.tag.intermediate.description",
    }),
    color: "#FBCC5C",
  },
  ipfs: {
    label: translate({ message: "IPFS" }),
    description: translate({
      message: "",
      id: "showcase.tag.ipfs.description",
    }),
    color: "#BF97FF",
  },
  javascript: {
    label: translate({ message: "Javascript" }),
    description: translate({
      message: "",
      id: "showcase.tag.javascript.description",
    }),
    color: "#FB7C6D",
  },
  keystores: {
    label: translate({ message: "Keystores" }),
    description: translate({
      message: "",
      id: "showcase.tag.keystores.description",
    }),
    color: "#BF97FF",
  },
  ledger: {
    label: translate({ message: "Ledger" }),
    description: translate({
      message: "",
      id: "showcase.tag.ledger.description",
    }),
    color: "#FB7C6D",
  },
  materialui: {
    label: translate({ message: "Material UI" }),
    description: translate({
      message: "",
      id: "showcase.tag.material-ui.description",
    }),
    color: "#73DDFF",
  },
  metamask: {
    label: translate({ message: "Metamask" }),
    description: translate({
      message: "",
      id: "showcase.tag.metamask.description",
    }),
    color: "#3488EC",
  },
  mint: {
    label: translate({ message: "Mint" }),
    description: translate({
      message: "",
      id: "showcase.tag.mint.description",
    }),
    color: "#35D07F",
  },
  mobile: {
    label: translate({ message: "Mobile" }),
    description: translate({
      message: "",
      id: "showcase.tag.mobile.description",
    }),
    color: "#FBCC5C",
  },
  nextjs: {
    label: translate({ message: "Nextjs" }),
    description: translate({
      message: "",
      id: "showcase.tag.nextjs.description",
    }),
    color: "#FB7C6D",
  },
  nft: {
    label: translate({ message: "NFT" }),
    description: translate({
      message: "",
      id: "showcase.tag.nft.description",
    }),
    color: "#73DDFF",
  },
  nodejs: {
    label: translate({ message: "Nodejs" }),
    description: translate({
      message: "",
      id: "showcase.tag.nodejs.description",
    }),
    color: "#BF97FF",
  },
  observable: {
    label: translate({ message: "Obervable" }),
    description: translate({
      message: "",
      id: "showcase.tag.observable.description",
    }),
    color: "#FB7C6D",
  },
  openzeppelin: {
    label: translate({ message: "Open Zeppelin" }),
    description: translate({
      message: "",
      id: "showcase.tag.openzeppelin.description",
    }),
    color: "#73DDFF",
  },
  oracle: {
    label: translate({ message: "Oracle" }),
    description: translate({
      message: "",
      id: "showcase.tag.metamask.description",
    }),
    color: "#3488EC",
  },
  pinata: {
    label: translate({ message: "pinata" }),
    description: translate({
      message: "",
      id: "showcase.tag.pinata.description",
    }),
    color: "#73DDFF",
  },
  progressive: {
    label: translate({ message: "Progressive" }),
    description: translate({
      message: "",
      id: "showcase.tag.progressive.description",
    }),
    color: "#35D07F",
  },
  randomness: {
    label: translate({ message: "Randomness" }),
    description: translate({
      message: "",
      id: "showcase.tag.randomness.description",
    }),
    color: "#FBCC5C",
  },
  react: {
    label: translate({ message: "React" }),
    description: translate({
      message: "",
      id: "showcase.tag.react.description",
    }),
    color: "#73DDFF",
  },
  reactnative: {
    label: translate({ message: "React Native" }),
    description: translate({
      message: "",
      id: "showcase.tag.reactnative.description",
    }),
    color: "#3488EC",
  },
  remix: {
    label: translate({ message: "Remix" }),
    description: translate({
      message: "",
      id: "showcase.tag.remix.description",
    }),
    color: "#BF97FF",
  },
  remote: {
    label: translate({ message: "Remote" }),
    description: translate({
      message: "",
      id: "showcase.tag.remote.description",
    }),
    color: "#FB7C6D",
  },
  sdk: {
    label: translate({ message: "SDK" }),
    description: translate({
      message: "",
      id: "showcase.tag.sdk.description",
    }),
    color: "#73DDFF",
  },
  smartcontract: {
    label: translate({ message: "Smart Contract" }),
    description: translate({
      message: "",
      id: "showcase.tag.smartcontract.description",
    }),
    color: "#3488EC",
  },
  solidity: {
    label: translate({ message: "Solidity" }),
    description: translate({
      message: "",
      id: "showcase.tag.solidity.description",
    }),
    color: "#3488EC",
  },
  sourcify: {
    label: translate({ message: "Sourcify" }),
    description: translate({
      message: "",
      id: "showcase.tag.sourcify.description",
    }),
    color: "#35D07F",
  },
  subgraphs: {
    label: translate({ message: "Subgraphs" }),
    description: translate({
      message: "",
      id: "showcase.tag.subgraphs.description",
    }),
    color: "#FBCC5C",
  },
  tokens: {
    label: translate({ message: "Tokens" }),
    description: translate({
      message: "",
      id: "showcase.tag.tokens.description",
    }),
    color: "#3488EC",
  },
  truffle: {
    label: translate({ message: "Truffle" }),
    description: translate({
      message: "",
      id: "showcase.tag.truffle.description",
    }),
    color: "#35D07F",
  },
  usecontractkit: {
    label: translate({ message: "use-contractkit" }),
    description: translate({
      message: "",
      id: "showcase.tag.usecontractkit.description",
    }),
    color: "#BF97FF",
  },
  valora: {
    label: translate({ message: "Valora" }),
    description: translate({
      message: "",
      id: "showcase.tag.valora.description",
    }),
    color: "#FB7C6D",
  },
  verification: {
    label: translate({ message: "Verification" }),
    description: translate({
      message: "",
      id: "showcase.tag.verification.description",
    }),
    color: "#73DDFF",
  },
  walletconnect: {
    label: translate({ message: "Wallet Connect" }),
    description: translate({
      message: "",
      id: "showcase.tag.walletconnect.description",
    }),
    color: "#3488EC",
  },
  video: {
    label: translate({ message: "Video" }),
    description: translate({
      message: "",
      id: "showcase.tag.video.description",
    }),
    color: "#35D07F",
  },
  typescript: {
    label: translate({ message: "Typescript" }),
    description: translate({
      message: "",
      id: "showcase.tag.typescript.description",
    }),
    color: "#3488EC",
  },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  // Paths
  // {
  //   title: '1. Celo Composer',
  //   description: 'Quickly build and deploy Celo dApps with Celo Composer',
  //   preview: require('./showcase/1.png'),
  //   website: '/tutorials?tags=composer',
  //   tags: ['favorite'],
  // },

  {
    title: 'Exclusive List of Hardware Wallets that Support the Celo Network',
    description: 'This tutorial aims to provide an exclusive list of hardware wallets that support the Celo network',
    preview: require('./showcase/beginner/exclusive-list-of-hardware-wallets-that-support-the-celo-network.png'),
    website: '/blog/tutorials/exclusive-list-of-hardware-wallets-that-support-the-celo-network',
    tags: ['beginner','celosage','celo','ledger','ERC20'],
  },
  {
    title: " Celo Composer",
    description: "Build on Celo in 5 minutes of less with Celo Composer.",
    preview: require("./showcase/celo-composer.png"),
    website: "/tutorials?tags=composer",
    tags: ["favorite"],
  },
  {
    title: ' A Comprehensive Guide to Comparing Hardware and Software Wallets on Celo',
    description: 'This tutorial will explain the differences between software and hardware wallets, and how to choose the right one for you.',
    preview: require('./showcase/beginner/A-Comprehensive-Guide-to-Comparing-Hardware-and-Software-Wallets-What-You-Need-to-Know.png'),
    website: '/blog/tutorials/a-comprehensive-guide-to-comparing-hardware-and-software-wallets-on-celo',
    tags: ['beginner','celosage','celo'],
  },
  {
    title: 'How to Transition from Web2 to Web3',
    description: 'Learn the basics of blockchain technology and web3 development',
    preview: require('./showcase/beginner/how-to-transition-from-web2-to-web3.png'),
    website: 'blog/tutorials/how-to-transition-from-web2-to-web3',
    tags: ['celosage', 'beginner','celo'],
  },
  {
    title: 'How to Tokenize Physical Assets on Celo',
    description: 'Understand how to start the tokenization on Celo',
    preview: require('./showcase/beginner/how-to-tokenize.png'),
    website: 'blog/tutorials/how-to-tokenize-a-physical-asset-on-celo',
    tags: ['celosage', 'beginner','celo', 'smartcontract'],
  },
  {
    title: '1. Beginner Tutorials',
    description: 'Curated list of beginner Celo developer tutorials.',
    preview: require('./showcase/beginner/beginner-tutorials.png'),
    website: '/tutorials?tags=beginner',
    tags: ['favorite'],
  },
  {
    title: "2. Intermediate Tutorials",
    description: "Curated list of intermediate Celo developer tutorials.",
    preview: require("./showcase/intermediate/intermediate-tutorials.png"),
    website: "/tutorials?tags=intermediate",
    tags: ["favorite"],
  },
  {
    title: "3. Advanced Tutorials",
    description: "Curated list of advanced Celo developer tutorials.",
    preview: require("./showcase/advanced/advanced-tutorials.png"),
    website: "/tutorials?tags=advanced",
    tags: ["favorite"],
  },

  // Posts
  {
    title: "Introducing Celo Sage",
    description:
      "Create. Earn. Grow. Providing opportunities for growth and development in the Celo Community.",
    preview: require("./showcase/celo-sage.png"),
    website: "blog/tutorials/introducing-celo-sage",
    tags: ["beginner", "celosage"],
  },
  {
    title: 'Preventing Vulnerabilities in Solidity: Ownership Attack',
    description: "In Solidity, an ownership attack takes advantage of a smart contract's vulnerabilities and gives illegal and unauthorized access to a foreign party.",
    preview: require('./showcase/intermediate/preventing-vulnerabilities-in-solidity-ownership-attack.png'),
    website: 'blog/tutorials/preventing-vulnerabilities-in-solidity-ownership-attack',
    tags: ['intermediate','celosage'],
  },
  {
    title: 'Introduction to ERC-20R and Reversible Transactions',
    description: "This article provides a detailed look into the need for reversible transactions and a technical approach to how they function.",
    preview: require('./showcase/beginner/introduction-to-erc-20r-and-reversible-transactions.png'),
    website: 'blog/tutorials/introduction-to-erc-20r-and-reversible-transactions',
    tags: ['beginner','celosage'],
  },
  {
    title: 'Exploring the Robust Structure of Celos Protocol Design',
    description: "Exploring the Robust Structure of Celo's Protocol Design",
    preview: require('./showcase/intermediate/Exploring_the_Robust_Structure_of_Celo_s_Protocol_Design.png'),
    website: 'blog/tutorials/exploring-the-robust-structure-of-celo-protocol-design',
    tags: ['intermediate','celosage'],
  },
   {
    title: 'Introducing Celo Sage',
    description: 'In Solidity, reentrancy describes a scenario in which a contract calls a second contract. The second contract then calls the first contract while the first contract is still running.',
    preview: require('./showcase/intermediate/preventing-vulnerabilities-in-solidity-reentrancy-attack.png'),
    website: 'blog/tutorials//preventing-vulnerabilities-in-solidity-reentrancy-attack',
    tags: ['intermediate','celosage'],
  },
  {
    title: 'Como usar a metodologia de gestão de produtos para criar soluções com NFT',
    description: 'Aprenda como usar a metodologia de gestão de produtos para criar soluções com NFT',
    preview: require('./showcase/beginner/metodologia-de-gestao-de-produtos.png'),
    website: 'blog/tutorials/como-usar-a-metodologia-de-gestao-de-produtos-para-criar-solucoes-com-NFT',
    tags: ['beginner', 'erc721', 'celosage'],
  },
  {
    title: 'Understanding Utility and Security Tokens',
    description: 'Utility tokens are digital assets that lives on the blockchain and can be used to gain access to certain things, such as a game or a website.',
    preview: require('./showcase/beginner/understanding-utility-and-security-tokens.png'),
    website: 'blog/tutorials/understanding-utility-and-security-tokens',
    tags: ['beginner', 'celosage'],
  },
  {
    title: 'Integrating Blockchain Technology into Legacy Systems on Celo',
    description:
      'Blockchain technology can facilitate new forms of collaboration and innovation by enabling the exchange of information and value between different parties.',
    preview: require('./showcase/intermediate/blockchain-integration-updating-legacy-systems-with-the-celo-platform.png'),
    website:
      '/blog/tutorials/blockchain-integration-updating-legacy-systems-with-the-celo-platform',
    tags: ['intermediate', 'celosage'],
  },
  {
    title: 'Product Discovery é a chave para criar produtos de NFT de sucesso no blockchain Celo',
    description: 'Aprenda como criar produtos de NFT de sucesso no blockchain Celo através de processos de product discovery',
    preview: require('./showcase/intermediate/product-discovery-a-chave-para-criar-produtos-de-NFT-de-sucesso-no-blockchain-Celo.png'),
    website: 'blog/tutorials/product-discovery-a-chave-para-criar-produtos-de-NFT-de-sucesso-no-blockchain-Celo',
    tags: ['intermediate', 'erc721', 'celosage'],
  },
  {
    title: 'Buy Me A Coffee Android App Using the Celo Java-SDK',
    description: 'This tutorial will show you how to create a simple Android app that allows users to make payments using the Celo Java SDK. The app, called "Buy Me A Coffee".',
    preview: require('./showcase/advanced/buyme-a-coffee-android-app-using-the-celo-java-sdk.png'),
    website: '/blog/tutorials/buy-me-a-coffee-android-app-using-the-celo-java-sdk',
    tags: ['celosage', 'android', 'celo', 'dapp', 'mobile', 'sdk', 'valora', 'advanced'],
  },
  {
    title: 'Cryptography in Blockchain - An Overview of Hash Functions and Digital Signatures',
    description: ' Cryptography plays a critical role in ensuring the security and privacy of data in the blockchain, the Distributed Ledger Technology (DLT) that has gained widespread adoption in recent years.',
    preview: require('./showcase/intermediate/cryptography-in-blockchain-an-overview-of-hash-functions-and-digital-signatures.png'),
    website: '/blog/tutorials/cryptography-in-blockchain-an-overview-of-hash-functions-and-digital-signatures',
    tags: ['celosage', 'intermediate'],
  },
  {
    title: 'How to build a Basic CRUD App in Solidity',
    description: 'This post will teach you how to create a basic Create, Read, Update and Delete (CRUD) smart contract and test it with the Truffle framework.',
    preview: require('./showcase/beginner/how-to-build-a-basic-crud-app-in-solidity.png'),
    website: 'blog/tutorials/how-to-build-a-basic-crud-app-in-solidity',
    tags: ['celosage','beginner'],
  },
  {
    title: 'Build In Public - Tips for making an impact',
    description: 'In this article we will discuss the benifits of having an online presence and the ways it can make your developer experience easy and enjoyable.',
    preview: require('./showcase/beginner/build-in-public.png'),
    website: '/blog/tutorials/build-in-public-tips-for-making-an-impact',
    tags: ['celosage','beginner'],
  },
  {
    title: 'Build a Decentralized Lottery Game on Celo',
    description: 'Learn to build a Decentralized Lottery Game on Celo along with a frontend.',
    preview: require('./showcase/intermediate/build-a-decentralized-lottery-game-on-celo.png'),
    website: '/blog/tutorials/build-a-decentralized-lottery-game-on-celo',
    tags: ['celosage', 'intermediate', 'hardhat', 'solidity', 'randomness', 'javascript'],
  },
  {
    title: 'Build a Decentralized Parking Ticket Payments DApp on Celo',
    description: 'Build and deploy a decentralized Parking Tickets issuing and payments dapp on Celo alfajores network.',
    preview: require('./showcase/intermediate/build-a-decentralized-parking-ticket-payments-dapp-on-celo.png'),
    website: '/blog/tutorials/build-a-decentralized-parking-ticket-payments-dapp-on-celo',
    tags: ['celosage', 'intermediate', 'solidity', 'hardhat', 'smartcontract'],
  },
  {
    title: 'Build a FullStack Token Swap Application on Celo using React and 0x API',
    description: 'This tutorial will guide you through the process of building a full-stack token swap application on the Celo blockchain using React and the 0x API.',
    preview: require('./showcase/intermediate/build-a-fullStack-token-swap-application-on-celo-using-react-and-0x-api.png'),
    website: '/blog/tutorials/build-a-fullStack-token-swap-application-on-celo-using-react-and-0x-api',
    tags: ['celosage', 'celo', 'intermediate', 'react'],
  },
  {
    title: 'Blockchain Basics - An Introduction to Web3 Terms and concepts with Celo',
    description: 'Basics of blockchain and NFTs,DEFI,and Web3 terms with Celo',
    preview: require('./showcase/beginner/blockchain-basics.png'),
    website: '/blog/tutorials/blockchain-basics-an-introduction-to-web3-terms-and-concepts-with-celo',
    tags: ['celosage','beginner'],
  },
  {
    title: 'Como construir e realizar deploy de contratos Factory no blockchain Celo',
    description: 'Explicar e construir um contract Factory na prática usando Remix',
    preview: require('./showcase/intermediate/How-to-Build-and-Deploy-Factory-Contracts-on-Celo-Blockchain.png'),
    website: 'blog/tutorials/como-construir-e-realizar-deploy-de-contratos-Factory-no-blockchain-Celo',
    tags: ['intermediate','celosage','solidity','smartcontract','video'],
  },
  {
    title: 'Signature Replay Attack',
    description: ' A signature replay attack is an attack whereby a previously executed valid transaction is fraudulently or maliciously repeated on the same blockchain or a different blockchain.',
    preview: require('./showcase/advanced/solidity-vulnerabilities-signature-replay-attack.png'),
    website: '/blog/tutorials/solidity-vulnerabilities-signature-replay-attack',
    tags: ['celosage','advanced', 'solidity'],
  },
  {
    title: 'Como Construir em Celo Usando Tatum',
    description: 'Aprenda como realizar um deploy ERRC20 em Celo usando Tatum.',
    preview: require('./showcase/beginner/como-construir-em-celo-usando-tatum.png'),
    website: 'blog/tutorials/como-construir-em-celo-usando-tatum',
    tags: ['beginner','celosage','ERC20','smartcontract','video'],
  },
  {
    title: 'Como Criar um Jogo de Roleta Russa na Blockchain Celo',
    description: 'Aprenda como criar um smart contract de aposta que funciona como uma roleta russa na blockchain Celo.',
    preview: require('./showcase/advanced/como-criar-um-jogo-de-roleta-russa-na-blockchain-celo.png'),
    website: 'blog/tutorials/como-criar-um-jogo-de-roleta-russa-na-blockchain-celo',
    tags: ['advanced','celosage','smartcontract','video', 'hardhat'],
  },
  {
    title: 'Aprenda solidity e como criar os primeiros smart contract usando a IDE Remix',
    description: 'Explicarei sobre conceitos de solidity e como criar seu primeiro smart contract.',
    preview: require('./showcase/intermediate/Aprenda-solidity-e-como-criar-os-primeiros-smart-contract-usando-a-IDE-Remix.png'),
    website: 'blog/tutorials/Aprenda-solidity-e-como-criar-os-primeiros-smart-contract-usando-a-IDE-Remix',
    tags: ['beginner','celosage','openzeppelin', 'solidity','smartcontract','video'],
  },
  {title: 'Como melhorar a segurança de seu smart contract',
  description: 'Explicarei os casos mais comuns de ataques e como proteger seu smart contract contra eles.',
  preview: require('./showcase/intermediate/como-melhorar-a-seguranca-do-seu-smart-contract.png'),
  website: 'blog/tutorials/como-melhorar-a-seguranca-de-seu-smart-contract',
  tags: ['intermediate','celosage', 'solidity','smartcontract','video'],
  },
  {
    title: 'A Solidity Smart Contract For Auctioning Flowers On The Celo Blockchain',
    description: 'This project is a Solidity smart contract for a floral auction. It allows users to create flowers with a name, description, image, and initial price, and then sell them through an auction.',
    preview: require('./showcase/intermediate/A-Solidity-Smart-Contract-for-Auctioning-Flowers-on-the-celo-Blockchain.png'),
    website: 'blog/tutorials/A-Solidity-Smart-Contract-For-Auctioning-Flowers-On-The-Celo-Blockchain',
    tags: ['celosage', 'solidity','smartcontract','intermediate', 'celo'],
  },
  {
    title: 'Como implantar um contrato inteligente ERC721 usando a API Tatum',
    description: 'Aprenda como realizar um deploy ERC721 em Celo usando Tatum.',
    preview: require('./showcase/intermediate/Como-implantar-um-contrato-inteligente-ERC721-usando-a-API-Tatum.png'),
    website: 'blog/tutorials/como-implantar-um-contrato-inteligente-ERC721-usando-a-API-Tatum',
    tags: ['intermediate','celosage','erc721','smartcontract','video'],
  },
  {
    title: 'Creating Smart Contracts for liquidity farming',
    description: ' Describing Smart Contracts For Liquidity Farming And The Technical Side Of Creating Them.',
    preview: require('./showcase/intermediate/creating-smart-contracts-for-liquidity-farming.png'),
    website: 'blog/tutorials/creating-smart-contracts-for-liquidity-farming',
    tags: ['intermediate','celosage','solidity','smartcontract'],
  },
  {
    title: 'cUsd-based Event Ticketing and Management System',
    description: 'This project is a smart contract written in the Solidity programming language on the celo blockchain. The contract is called "Evently" and it allows users to create and buy tickets for events.',
    preview: require('./showcase/intermediate/cUsd-based-event-ticketing-and-management-system.png'),
    website: 'blog/tutorials/cUsd-based-event-ticketing-and-management-system',
    tags: ['intermediate','celosage','solidity','smartcontract'],
  },
  {
    title: 'Como criar uma carteira para a blockchain Celo',
    description: 'Aprenda como criar uma carteira para a blockchain Celo no seu navegador',
    preview: require('./showcase/beginner/como-criar-uma-carteira-para-a-blockchain-celo.png'),
    website: 'blog/tutorials/como-criar-uma-carteira-para-a-blockchain-celo',
    tags: ['celosage', 'video', 'beginner', "celo", "metamask"],
  },
  {
    title: 'Como integrar seu smart contract ao oráculo da Redstone Finance',
    description: 'Aprenda como conectar seu smart contract à rede de oráculos da Redstone Finance',
    preview: require('./showcase/advanced/como-integrar-seu-smart-contract-ao-oraculo-da-redstone-finance.png'),
    website: 'blog/tutorials/como-integrar-seu-smart-contract-ao-oraculo-da-redstone-finance',
    tags: ['celosage', 'video', 'advanced', "celo", "solidity", "hardhat"],
  },
  {
    title: 'Como enviar e verificar um contrato na blockchain Celo com o hardhat-celo',
    description: 'Aprenda como enviar e verificar um contrato inteligente na blockchain Celo',
    preview: require('./showcase/intermediate/como-enviar-e-verificar-um-contrato-com-hardhat-celo.png'),
    website: 'blog/tutorials/como-enviar-e-verificar-um-contrato-com-hardhat-celo',
    tags: ['celosage', 'solidity', 'video', 'hardhat', 'intermediate'],
  },
  {
    title: 'C# mobile App to display Celo NFTs',
    description: 'Learn how build an Android app with C# and connect to Celo network to retriever NFT metadata and display NFT in the app.',
    preview: require('./showcase/advanced/c-sharp-mobile-dapp-to-display-celo-nfts.png'),
    website: 'https://docs.celo.org/blog/2022/07/15/csharp-mobile-app-to-display-celo-nfts',
    tags: ['advanced','foundation', 'mobile', 'android', 'nft', 'popular'],
  },
  {
    title: 'Flutter & Celo - Easily build Flutter Mobile dApps',
    description: 'Celo Composer now supports Flutter. Quickly develop mobile apps on Celo.',
    preview: require('./showcase/intermediate/flutter-and-celo-easily-build-flutter-mobile-dapps.png'),
    website: 'blog/tutorials/flutter-celo-easily-build-flutter-mobile-dApps',
    tags: ['intermediate','foundation', 'flutter', 'composer'],
  },
  {
    title: "Flutter & Celo - Easily build Flutter Mobile dApps",
    description:
      "Celo Composer now supports Flutter. Quickly develop mobile apps on Celo.",
    preview: require("./showcase/intermediate/flutter-and-celo-easily-build-flutter-mobile-dapps.png"),
    website: "blog/tutorials/flutter-celo-easily-build-flutter-mobile-dApps",
    tags: ["intermediate", "foundation", "flutter", "composer"],
  },
  {
    title: 'Step-by-Step Guide to Deploying your First Full-Stack Dapp on Celo.',
    description: 'Building a Full Stack Web3 Dapp to mint an NFT.',
    preview: require('./showcase/intermediate/step-by-step-guide-to-deploying-your-first-full-stack-dapp-on-celo.png'),
    website: '/blog/tutorials/step-by-step-guide-to-deploying-your-first-full-stack-dapp-on-celo',
    tags: ['intermediate', 'solidity','celosage','erc721','truffle'],
  },
  {
    title: 'Dynamic NFT Creation using SVG to build in Smart Contract on Celo.',
    description: 'Welcome to our tutorial on dynamic NFT creation using SVG to build in a smart contract on Celo!',
    preview: require('./showcase/intermediate/dynamic-nft-creation-using-svg-to-build-in-smart-contract-on-celo.png'),
    website: '/blog/tutorials/dynamic-nft-creation-using-svg-to-build-in-smart-contract-on-celo',
    tags: ['intermediate', 'solidity','celosage','erc721','truffle'],
  },
   {
    title: 'How to deploy a celo composer application on spheron protocol(decentralized cloud storage).',
    description: 'In this tutorial, you will learn how to deploy a dapp built using celo composer on a decentalised cloud service called spheron protocol.',
    preview: require('./showcase/intermediate/How_to_deploy_a_Celo_Composer_application_on_Spheron_protocol.png'),
    website: '/blog/tutorials/how-to-deploy-a-celo-composer-application-on-spheron-protocol',
    tags: ["intermediate", "composer", "dapp", "dappstarter", "deploy", "celosage"],
  },
  {
    title: 'Using Witnet.io Oracle to Connect Smart Contracts to Off-Chain Data with Celo',
    description: 'Connecting smart contracts to off-chain data on the Celo platform is made possible through the integration of the decentralized oracle network, Witnet.io!',
    preview: require('./showcase/intermediate/using-witnetio-oracle-to-connect-smart-contracts-to-off-chain-data-with-celo.png'),
    website: '/blog/tutorials/using-witnetio-oracle-to-connect-smart-contracts-to-off-chain-data-with-celo',
    tags: ['intermediate', 'solidity','celosage','erc721','truffle'],
  },
  {
    title: 'Composer Series - Build a Crowdfunding ReFi dApp with Celo Composer',
    description: 'How to quickly create and deploy a full-stack crowdfunding dApp on Celo.',
    preview: require('./showcase/advanced/celo-composer-build-a-crowdfunding-refi-dapp-with-celo-composer.png'),
    website: 'blog/2022/06/21/composer-series-build-a-crowdfunding-refi-dApp-with-celo-composer',
    tags: ['advanced', 'foundation', 'crowdfunding', 'composer'],
  },
  {
    title: "Gas Optimization Techniques in Solidity on Celo",
    description:
      "Optimizing smart contract performance is an essential aspect of blockchain development.",
    preview: require("./showcase/advanced/gas-optimization-techniques-in-solidity.png"),
    website: "/blog/tutorials/gas-optimization-techniques-in-solidity",
    tags: ["celosage", "advanced", "solidity"],
  },
  {
    title: 'How to Assemble a Web3 Dream Team and Build a High Value dApp',
    description: 'There are multiple factors to consider when assembling a web3 dream team.',
    preview: require('./showcase/beginner/How-to-Assemble-a-Web3-Dream-Team-and-Build-a-High-Value-dApp.png'),
    website: 'blog/tutorials/how-to-assemble-a-web3-dream-team-and-build-a-high-value-dapp',
    tags: ['celo', 'dapp', 'beginner', 'celosage'],
  },
  {
    title: 'How to Build a Full Stack Dapp For Selling Football Tickets on Celo',
    description: 'Learn how to build a dapp for seliing football tickets on the celo blockchain',
    preview: require('./showcase/intermediate/How-To-Build-a-Fullstack-Dapp-For-Selling-Football-Tickets.png'),
    website: 'blog/tutorials/how-to-build-a-fullstack-dapp-for-selling-football-tickets-on-celo',
    tags: ['celo', 'dapp', 'intermediate', 'celosage'],
  },
  {
    title: 'How to quickly build an NFT collection on Celo',
    description: 'Create a low-code NFT collection with Celo, IPFS, Pinata, and Remix.',
    preview: require('./showcase/beginner/how-to-quickly-build-an-nft-collection-on-celo.png'),
    website: 'blog/tutorials/how-to-quickly-build-an-nft-collection-on-celo',
    tags: ['beginner','foundation', 'nft', 'foundation'],
  },
  {
    title: "React Native & Celo - Easily build React Native dApps on Celo",
    description:
      "Quickly develop Android and iOS apps on Celo using the Celo Composer for React Native.",
    preview: require("./showcase/intermediate/easily-build-react-native-dapps-on-celo.png"),
    website:
      "blog/tutorials/React-Native-&-Celo-Easily-build-React-Native-dApps-on-Celo",
    tags: ["beginner", "foundation", "nft", "foundation"],
  },
  {
    title: 'How to build a Bookshop Marketplace Dapp on Celo Blockchain',
    description: 'Learn how to build a bookshop marketplace platform on celo blockchain',
    preview: require('./showcase/intermediate/how-to-build-a-bookshop-marketplace-dapp.png'),
    website: 'blog/tutorials/how-to-build-a-bookshop-marketplace-dapp',
    tags: ['celosage','celowallet', 'celo', 'solidity', 'html', 'remix', 'smartcontract', 'intermediate'],
  },
  {
    title: 'Introduction to creating NFTs on Celo',
    description: 'This tutorial will walk through the basic steps required to create an NFT collection (of ERC-721 tokens) on Celo. ',
    preview: require('./showcase/beginner/introduction-to-creating-nfts-on-celo.png'),
    website: 'https://medium.com/celodevelopers/introduction-to-creating-nfts-on-celo-eb7240a71cc0',
    tags: ['beginner','foundation', 'nft', 'erc721'],
  },
  {
    title: 'Introduction to Zero-Knowledge Technology and its Blockchain Applications',
    description: 'This tutorial is an introduction to zero-knowledge technology and some use cases in the blockchain space',
    preview: require('./showcase/intermediate/introduction-to-zero-knowledge-technology-and-its-blockchain-applications.png'),
    website: 'blog/tutorials/introduction-to-zero-knowledge-technology-and-its-blockchain-applications',
    tags: ['celosage', 'intermediate'],
  },
  {
    title: ' How to Build Car Marketplace dapp Using React',
    description: 'Learn how to build a Car Marketplace on the Celo Blockchain with React as frontend framework',
    preview: require('./showcase/intermediate/how-to-build-car-marketplace-using-react.png'),
    website: 'blog/tutorials/how-to-build-car-marketplace-dapp-with-react',
    tags: ['celowallet', 'celo', 'solidity', 'react', 'celosage', 'intermediate'],
  },
  {
    title: 'How to write a multi-signatures contract on Celo using Hardhat | Part 1/2',
    description: 'Building a multi-signatures contract on Celo blockchain using Hardhat, multi-signatures are one of the best way to keep your crypto assets or ownership of your contracts safe and remove a central point of failure.',
    preview: require('./showcase/advanced/how-to-write-a-multi-signatures-contract-on-celo-using-hardhat-part-1-2.png'),
    website: 'blog/tutorials/how-to-write-a-multi-signatures-contract-on-celo-using-hardhat-part-1-2',
    tags: ['celosage', 'celo', 'solidity', 'smartcontract', 'hardhat', 'advanced'],
  },
  {
    title: 'Celo Impact on Underbanked and Unbanked Communities',
    description: 'Celo a blockchain platform aimed at providing financial inclusion and access to financial services for underbanked and unbanked communities',
    preview: require('./showcase/intermediate/unbanked.png'),
    website: '/blog/tutorials/celo-impact-on-underbanked-and-unbanked-communities',
    tags: ['celo', 'intermediate', 'celosage'],
  },
  {
    title: 'Building for the Celo Connect Mobile Hackathon',
    description: 'Resources to help you build your mobile-first Celo dApp.',
    preview: require('./showcase/intermediate/building-for-the-celo-connect-mobile-hackathon.png'),
    website: 'https://medium.com/celodevelopers/building-for-the-celo-connect-mobile-hackathon-a78707b7431c',
    tags: ['intermediate','foundation'],
  },
  {
    title: 'Build Your Own Full-Stack NFT Marketplace on Celo',
    description: 'Build a full stack Nft Marketplace on the celo block-chain using ipfs and web3.storage for metadata storage.',
    preview: require('./showcase/intermediate/build-your-own-full-stack-nft-marketplace-on-celo.png'),
    website: 'blog/tutorials/Build-Your-Own-Full-Stack-NFT-Marketplace-on-Celo',
    tags: ['celosage', 'nft', 'solidity', 'celo', 'advanced'],
  },
  {
    title: 'Build an NFT Full Stack Monster War Game on The Celo Blockchain',
    description: 'Build a full stack NFT on chain game on the celo blockchain.',
    preview: require('./showcase/advanced/build-an-nft-full-stack-monster-war-game-on-the-celo-blockchain.png'),
    website: 'blog/tutorials/build-an-nft-full-stack-monster-war-game-on-the-celo-blockchain',
    tags: ['celosage', 'nft', 'solidity', 'celo', 'advanced'],
  },
  {
    title: 'Build Your Own Full Stack DAO On the Celo Blockchain',
    description: 'This tutorial will show you how to build a full stack decenralized autonomous organization on the celo blockchain',
    preview: require('./showcase/intermediate/build-your-own-full-stack-dao-on-the-celo-blockchain.png'),
    website: 'blog/tutorials/build-your-own-full-stack-dao-on-the-celo-blockchain',
    tags: ['celosage', 'solidity', 'celo', 'react', 'intermediate'],
  },
  {
    title: 'Celo Composer - Extend and Customize your Full-Stack Mobile dApps',
    description: 'Step-by-step guide to create a new custom dApp using the Celo Composer.',
    preview: require('./showcase/intermediate/celo-composer-extend-and-customize-your-full-stack-mobile-dapps.png'),
    website: 'blog/tutorials/celo-composer-customize-your-full-stack-mobile-dapps-on-celo',
    tags: ['intermediate','foundation', 'composer'],
  },
  {
    title: 'ContractKit - A Practical Guide to Interacting with the Celo Core Contracts',
    description: 'How to access the Celo Blockchain with JavaScript using ContractKit.',
    preview: require('./showcase/intermediate/contractkit-a-practical-guide-to-interacting-with-the-celo-core-contracts.png'),
    website: 'blog/tutorials/contractkit-a-practical-guide-to-interacting-with-the-celo-core-contracts',
    tags: ['intermediate','foundation', 'contractkit'],
  },
  {
    title: '3 Simple Steps to Get Started with Valora on Celo',
    description: 'Send, pay, and spend cryptocurrency like everyday money — all from the palm of your hand.',
    preview: require('./showcase/beginner/3-simple-steps-to-get-started-with-valora-on-celo.png'),
    website: 'blog/tutorials/3-simple-steps-to-get-started-with-valora-on-celo',
    tags: ['beginner','foundation', 'valora'],
  },
  {
    title: 'All you need to know about Celo to Ease your Web3 Development Journey you use Celo Blockchain',
    description: 'In this tutorial, we will introduce you to the Celo blockchain and explain the key features and benefits of using it for your web3 development projects.',
    preview: require('./showcase/beginner/All-you-need-to-know-about-Celo-to-Ease-your-Web3-Development.png'),
    website: '/blog/tutorials/All-you-need-to-know-about-Celo-to-Ease-your-Web3-Development-Journey',
    tags: ['celosage', 'celo', 'video', 'remote'],
  },
  {
    title: 'Plumo - An Ultralight Blockchain Client on Celo',
    description: 'How the Celo light client became 1.7 million times lighter than Ethereum.',
    preview: require('./showcase/beginner/plumo-an-ultralight-blockchain-client-on-celo.png'),
    website: 'blog/tutorials/plumo-an-ultralight-blockchain-client-on-celo',
    tags: ['beginner', 'foundation', 'nft'],
  },
  {
    title: 'A Boilerplate guide to Airdropping on Celo',
    description: 'Deploy an Airdrop contract to Celo and claim ERC20 tokens using the web3 SDK.',
    preview: require('./showcase/intermediate/a-boilerplate-guide-to-airdropping-on-celo.png'),
    website: 'blog/tutorials/a-boilerplate-guide-to-airdropping-on-celo',
    tags: ['intermediate','foundation', 'airdrop'],
  },
  {
    title: 'Getting started with DAOs on Celo',
    description: 'Introduction to DAOs and the advantages of building a DAO on Celo.',
    preview: require('./showcase/beginner/getting-started-with-daos-on-celo.png'),
    website: 'blog/tutorials/getting-started-with-daos-on-celo',
    tags: ['beginner','foundation', 'dao'],
  },
  {
    title: 'Hardhat and Celo | The Ultimate Guide to Deploy Celo dApps using Hardhat',
    description: 'How to deploy a smart contract to Celo testnet, mainnet, or a local network using Hardhat.',
    preview: require('./showcase/beginner/the-ultimate-guide-to-deploy-celo-dapps-using-hardhat.png'),
    website: 'blog/tutorials/hardhat-and-celo-the-ultimate-guide-to-deploy-celo-dapps-using-hardhat',
    tags: ['beginner','foundation', 'hardhat'],
  },
  {
    title: 'How to become a Web3 Developer',
    description: 'In this tutorial, we will show you how to become a web3 developer and build decentralized applications on the Celo blockchain.',
    preview: require('./showcase/beginner/How-to-become-a-web3-developer.png'),
    website: 'blog/tutorials/How-to-become-a-Web3-Developer',
    tags: ['beginner','celo', 'celosage'],
  },
  {
    title: 'How Uniswap Works',
    description: 'In this tutorial, we will provide an introduction to the decentralized finance (DeFi) ecosystem on the Celo blockchain.',
    preview: require('./showcase/beginner/how-uniswap-works.png'),
    website: 'blog/tutorials/how-uniswap-works',
    tags: ['celosage', 'celo', 'beginner'],
  },
  {
    title: 'Build a Full Stack Coffee Dapp With Celo Composer and Solidity',
    description: 'This tutorial will take you through a step-by-step guide on how to create a frontend and backend (Smart Contract) dApp explaining how to create a decentralized version of Buy Me A Coffee.',
    preview: require('./showcase/intermediate/Build-a-Full-Stack-Coffee-Dapp-With-Celo-Composer-and-Solidity.png'),
    website: 'blog/tutorials/Build-a-Full-Stack-Coffee-Dapp-With-Celo-Composer-and-Solidity',
    tags: ['celosage','composer','celo','celowallet','contractkit','dapp','valora','typescript', 'smartcontract', 'solidity', 'nextjs', 'intermediate', 'advanced'],
  },
  {
    title: 'How to Build a Full Stack Social Media Dapp on the Celo Blockchain',
    description: 'This tutorial covers how to build a decentralized social media dapp on the celo blockchain',
    preview: require('./showcase/intermediate/how-to-build-a-full-stack-social-media-dapp-on-the-celo-blockchain.png'),
    website: 'blog/tutorials/how-to-build-a-full-stack-social-media-dapp-on-the-celo-blockchain',
    tags: ['celosage', 'solidity', 'celo', 'react'],
  },
  {
    title: 'Truffle and Celo | The Ultimate Guide to Deploy Celo dApps with Truffle',
    description: 'How to deploy a smart contract to Celo testnet, mainnet, or a local blockchain using Truffle.',
    preview: require('./showcase/beginner/the-ultimate-guide-to-deploy-dapps-using-truffle.png'),
    website: 'blog/tutorials/truffle-and-celo-the-ultimate-guide-to-deploy-celo-dapps-with-truffle',
    tags: ['beginner','foundation', 'truffle'],
  },
  {
    title: 'Exploring Celo in the Gaming Industry for In-Game Assets and P2P Trading',
    description: 'Learn how Celo is utilized in the Gaming Industry for In-Game Assets and P2P Trading',
    preview: require('./showcase/beginner/exploring-celo-in-the-gaming-industry-for-in-game-assets-and-p2p-trading.png'),
    website: 'blog/tutorials/exploring-celo-in-the-gaming-industry-for-in-game-assets-and-p2p-trading',
    tags: ['celosage', 'celowallet', 'celo', 'cusd', 'ledger'],
  },
  {
    title: '6 Steps to Quickly Build Smart Contracts on Celo with Remix',
    description: 'How to create, deploy and interact with smart contracts on Celo testnet or mainnet using Remix.',
    preview: require('./showcase/beginner/6-steps-to-quickly-build-smart-contracts-on-celo-with-remix.png'),
    website: 'blog/tutorials/6-steps-to-quickly-build-smart-contracts-on-celo-with-remix',
    tags: ['beginner','foundation', 'remix'],
  },
  {
    title: '3 Simple Steps to Connect your MetaMask Wallet To Celo',
    description: 'A step-by-step tutorial to add the Celo network to your MetaMask wallet.',
    preview: require('./showcase/beginner/3-simple-steps-to-connect-your-metamask-wallet-to-celo.png'),
    website: 'blog/tutorials/3-simple-steps-to-connect-your-metamask-wallet-to-celo',
    tags: ['beginner','foundation', 'metamask'],
  },
  {
    title: 'Celo CLI - A Practical Guide to Energize your Celo Toolkit',
    description: 'Explore the Celo blockchain using a command-line interface.',
    preview: require('./showcase/beginner/celo-cli-a-practical-guide-to-energize-your-celo-toolkit.png'),
    website: 'blog/tutorials/celo-cli-a-practical-guide-to-energize-your-celo-toolkit',
    tags: ['beginner','foundation', 'cli'],
  },
  {

    title: 'Pros and Cons of using Celo to create Decentralized Applications',
    description: 'Pros and Cons of using Celo to create Decentralized Applications',
    preview: require('./showcase/beginner/pros.png'),
    website: 'blog/tutorials/pros-and-cons-of-using-celo-to-create-decentralized-applications',
    tags: ['celosage', 'beginner', 'foundation'],
  },
  {
    title: 'Celo Composer - Easily Build Full-Stack Mobile dApps on Celo',
    description: 'Quickly develop full-stack progressive web applications on Celo with the Celo Composer.',
    preview: require('./showcase/beginner/celo-composer-easily-build-full-stack-mobile-dapps-on-celo.png'),
    website: 'blog/tutorials/easily-build-full-stack-mobile-dapps-on-celo',
    tags: ['beginner','foundation', 'composer'],
  },
  {
    title: 'A beginners Guide to Layer 1 blockchains, Social Impact, ReFi, Defi and More',
    description: 'Learn about Layer 1 blockchains, DeFi, ReFi and more on Celo and its ecosystem.',
    preview: require('./showcase/beginner/a-beginners-guide-to-layer-1-blockchains-socialimpact-refi-defi.png'),
    website: 'blog/tutorials/a-beginners-guide-to-layer-1-blockchains-socialimpact-refi-defi-and-more',
    tags: ['celosage', 'celo', 'beginner'],
  },
  {
    title: 'Unlocking the Power of Blockchain, NFTs, and Cryptography',
    description: 'Learn the potentials of web-3 decentralised finance',
    preview: require('./showcase/beginner/unlocking-the-power-of-blockchain-nft-and-cryptography.png'),
    website: '/blog/tutorials/unlocking-the-power-of-blockchain-nfts-and-cryptography',
    tags: ['celosage', 'celo', 'beginner'],
  },
  {
    title: '17 Smart Contracts Powering the Celo Protocol',
    description: 'Making sense of the logic driving the Celo platform.',
    preview: require('./showcase/intermediate/17-smart-contracts-powering-the-celo-protocol.png'),
    website: '/blog/tutorials/17-smart-contracts-powering-the-celo-protocol',
    tags: ['intermediate','foundation', 'metamask'],
  },
  {
    title: 'Introduction to Celo Composer',
    description: 'Quickly develop full-stack progressive web applications on the Celo blockchain.',
    preview: require('./showcase/beginner/introduction-to-celo-composer.png'),
    website: '/blog/2022/02/21/introduction-to-celo-progressive-dappstarter',
    tags: ['beginner','foundation', 'react', 'materialui', 'dappstarter', 'progressive'],
  },
  {
    title: 'Celo Spotlight - Building a Financial System that Creates the Conditions for Prosperity — for Everyone.',
    description: 'Everything you need to get started with Celo.',
    preview: require('./showcase/beginner/celo-spotlight-everything-you-need-to-get-started-with-celo.png'),
    website: 'blog/tutorials/celo-spotlight',
    tags: ['beginner','foundation', 'celo'],
  }, 
  {
    title: 'Celo Valora + WalletConnect v1',
    description: 'How to use WalletConnect version 1 in a DApp to connect to Valora.',
    preview: require('./showcase/intermediate/celo-valora-and-walletconnect-v1.png'),
    website: '/blog/tutorials/celo-valora-and-walletconnect-v1',
    tags: ['intermediate','foundation', 'react', 'valora', 'walletconnect'],
  },
  {
    title: 'Create an Escrow NFT Platform on Celo with Python',
    description: 'Learn how to create an escrow NFT platform on Celo with Eth-Brownie Python',
    preview: require('./showcase/intermediate/create-an-escrow-nft-platform-on-celo-with-python.png'),
    website: '/blog/tutorials/create-an-escrow-nft-platform-on-celo-with-python',
    tags: ['celosage', 'intermediate','nft'],
  },
  {
    title: 'Use onchain randomness',
    description: 'Onchain randomness is used for selecting validators to perform phone number verification. Read more about how onchain randomness is produced at the provided page.',
    preview: require('./showcase/intermediate/use-on-chain-randomness.png'),
    website: '/blog/2022/01/07/on-chain-randomness',
    tags: ['intermediate','foundation', 'solidity', 'randomness', 'oracle'],
  },
  {
    title: 'Understanding the Fundamentals of Auction Programming in Solidity',
    description: 'Gain a comprehensive understanding of the fundamental concepts and programming techniques for building decentralized auction applications using Solidity.',
    preview: require('./showcase/intermediate/Auction.png'),
    website: 'blog/tutorials/Understanding-the-Fundamentals-of-Auction-Programming-in-Solidity',
    tags: ['celo', 'intermediate', 'celosage'],
  },
  { 
    title: 'Understanding the Role of Proposals and Referendums in Celo Governance',
    description: 'A Comprehensive Breakdown of the Role of Proposals and Referendums in Celo Governance',
    preview: require('./showcase/intermediate/celo-governance.png'),
    website: 'blog/tutorials/Understanding-the-Role-of-Proposals-and-Referendums-in-Celo-Governance',
    tags: ['intermediate','celo', 'celosage'],
  },
  { 
    title: 'Create a React Based DApp on Celo',
    description: 'The beginner of developing a decentralised application (DApp) on Celo.',
    preview: require('./showcase/intermediate/create-a-react-based-dapp-on-celo.png'),
    website: '/blog/developer-guide/start/web-dapp',
    tags: ['intermediate','foundation', 'dapp', 'react', 'nextjs', 'usecontractkit', 'sdk'],
  },
  {
    title: 'Deploy an NFT to Celo',
    description: 'How to deploy ERC721 tokens (NFTs) on the Celo network using autogenerated code.',
    preview: require('./showcase/beginner/deploy-an-nft-to-celo.png'),
    website: '/blog/2022/01/05/no-code-erc721',
    tags: ['beginner','foundation', 'tokens', 'erc721', 'mint', 'nft', 'ipfs', 'pinata', 'solidity', 'remix'],
  },
  {
    title: 'Deploy & Mint a Token',
    description: 'How to deploy a token contract that use the ERC20 token standard to Celo without writing code.',
    preview: require('./showcase/beginner/deploy-and-mint-a-token-on-celo.png'),
    website: '/blog/2022/01/04/no-code-erc20',
    tags: ['beginner','foundation', 'tokens', 'ERC20', 'mint', 'solidity', 'openzeppelin', 'remix'],
  },
  {
    title: 'Deploy and Interact with Contracts (Remotely)',
    description: 'How to deploy and interact your own smart contracts using a remote node.',
    preview: require('./showcase/intermediate/deploy-and-interact-with-contracts-remotely.png'),
    website: '/blog/developer-guide/start/hello-contract-remote-node',
    tags: ['intermediate','foundation', 'smartcontract', 'remote', 'deploy'],
  },
  {
    title: 'Deploy a Contract on Celo (local node)',
    description: 'How to deploy your own smart contracts onto a Celo local node.',
    preview: require('./showcase/intermediate/deploy-a-contract-on-celo-local-node.png'),
    website: '/blog/developer-guide/start/hellocontracts',
    tags: ['intermediate','foundation', 'smartcontract'],
  },
  {
    title: 'Sending CELO & Stable Assets',
    description: 'How to connect to the Celo test network and tranfer tokens using ContractKit.',
    preview: require('./showcase/intermediate/sending-celo-and-stable-assets.png'),
    website: '/blog/developer-guide/start/hellocelo',
    tags: ['intermediate','foundation', 'tokens', 'celowallet', 'contractkit', 'sdk', 'ledger'],
  },
  {
    title: 'Using Keystores Library for Local Key Management',
    description: 'Introduction to the keystores library and how to use it for local key management.',
    preview: require('./showcase/advanced/using-keystores-library-for-local-key-management.png'),
    website: '/blog/developer-guide/start/using-js-keystores',
    tags: ['advanced','foundation', 'keystores'],
  },
  {
    title: 'Add an ERC20 Token to Your Celo Wallet',
    description: 'Open up Cello Wallet and make sure you can see “Account Balance Details” then select “Add a new currency/token.',
    preview: require('./showcase/beginner/add-an-erc20-token-to-your-celo-wallet.png'),
    website: '/blog/add-token-celo-wallet',
    tags: ['beginner','foundation', 'tokens', 'celowallet'],
  },
  {
    title: 'Run a Celo full node in a Virtual Machine',
    description: 'Learn how to setup & run a Celo full node in a Virtual Machine.',
    preview: require('./showcase/intermediate/run-a-celo-full-node-in-a-virtual-machine.png'),
    website: 'https://learn.figment.io/tutorials/how-to-run-a-celo-full-node-in-a-virtual-machine',
    tags: ['intermediate', 'figment', 'nodejs'],
  },
  {
    title: 'Verifying Contracts with Hardhat',
    description: 'Hardhat is one of the most popular developer tools for writing contracts for EVM compatible blockchains.',
    preview: require('./showcase/intermediate/verifying-contracts-with-hardhat.png'),
    website: '/blog/hardhat-deploy-verify',
    tags: ['intermediate','foundation', 'hardhat', 'sourcify', 'verification'],
  },
  {
    title: 'Demos with ObservableHQ',
    description: 'Observable HQ is a Javascript notebook tool that makes it easy to share executable Javascript code right in the browser.',
    preview: require('./showcase/intermediate/demos-with-observable-hq.png'),
    website: '/blog/observable-intro',
    tags: ['intermediate','foundation', 'observable'],
  },
  {
    title: 'Using the Graph with Celo',
    description: 'The Graph protocol makes it easy to get historical blockchain data.',
    preview: require('./showcase/intermediate/using-the-graph-with-celo.png'),
    website: '/blog/using-the-graph',
    tags: ['intermediate','foundation', 'graph', 'dapp'],
  },
  {
    title: 'Code Playground -- Metamask',
    description: 'Connect to Metamask, switch networks, add tokens to the Metamask asset list and send them to other accounts.',
    preview: require('./showcase/beginner/code-playground-metamask-and-celo.png'),
    website: '/blog/code-metamask',
    tags: ['beginner','foundation', 'codeplayground'],
  },
  {
    title: 'Introduction to the Code Playground',
    description: 'This post provides an introduction to the live code editor that is included as a feature in this blog.',
    preview: require('./showcase/beginner/introduction-to-the-celo-code-playground.png'),
    website: '/blog/code-playground',
    tags: ['beginner','foundation', 'codeplayground'],
  },
  {
    title: 'Submit a Tutorial',
    description: "Celo is an open source project and without community contributions from people like you Celo wouldn't exist. We welcome contributions to our codebase, documentation, translations and blog.",
    preview: require('./showcase/beginner/how-to-submit-a-tutorial-to-celo-docs.png'),
    website: 'https://docs.celo.org/blog/blog-contributions',
    tags: ['beginner','foundation', 'contribute'],
  },
  {
    title: 'Celo Development 201 - Build an NFT Minter with Hardhat and React',
    description: 'Throughout this intermediate course you are going to learn about NFTs, contract development with Hardhat and how to build a React frontend with use-contractkit.',
    preview: require('./showcase/intermediate/celo-development-201-build-an-nft-minter-with-hardhat-and-react.png'),
    website: 'https://dacade.org/communities/celo/courses/celo-201',
    tags: ['intermediate','dacade', 'smartcontract', 'html', 'javascript', 'nft', 'hardhat'],
  },
  {
    title: 'Celo Development 101',
    description: 'Learn smart contract development and build a Dapp on Celo.',
    preview: require('./showcase/beginner/celo-development-101.png'),
    website: 'https://dacade.org/communities/celo/courses/celo-development-101',
    tags: ['beginner','dacade', 'smartcontract', 'html', 'javascript'],
  },
  {
    title: 'Celo Blockchain 101',
    description: 'In this course, you will learn the most important blockchain concepts that you will need to navigate the Celo ecosystem.',
    preview: require('./showcase/beginner/celo-blockchain-101.png'),
    website: 'https://dacade.org/communities/celo/courses/celo-bc-101',
    tags: ['beginner','dacade', 'smartcontract', 'html', 'javascript'],
  },
  {
    title: 'How to mint your own fungible token on Celo',
    description: 'How to create fungible tokens on Celo using the Remix IDE.',
    preview: require('./showcase/beginner/deploy-and-mint-a-token-on-celo.png'),
    website: 'https://learn.figment.io/tutorials/celo-erc20-token-on-remix',
    tags: ['beginner','figment', 'solidity', 'metamask', 'remix'],
  },
  {
    title: 'Deploying smart contracts on Celo with Truffle',
    description: 'We will learn how to use Truffle and ContractKit to deploy smart contracts to Celo.',
    preview: require('./showcase/beginner/deploying-smart-contracts-on-celo-with-truffle.png'),
    website: 'https://learn.figment.io/tutorials/deploying-smart-contracts-on-celo-with-truffle',
    tags: ['beginner','figment', 'solidity', 'metamask', 'remix'],
  },
  {
    title: 'How to successfully connect to a Celo Wallet with a React Native DApp',
    description: 'Learn how to successfully set up a Celo Wallet with a React Native DApp using Redux.',
    preview: require('./showcase/intermediate/how-to-successfully-connect-to-a-celo-wallet-with-a-react-native-dapp.png'),
    website: 'https://learn.figment.io/tutorials/how-to-successfully-connect-to-a-celo-wallet-with-a-react-native-dapp',
    tags: ['intermediate', 'figment', 'reactnative', 'nodejs'],
  },
  {
    title: 'How to customize an Ethereum smart contract for the Celo network',
    description: 'Learn how to convert & customize an existing Ethereum Smart Contract for Celo network',
    preview: require('./showcase/intermediate/how-to-customize-an-ethereum-smart-contract-for-the-celo-network.png'),
    website: 'https://learn.figment.io/tutorials/celo-contract-from-ethereum',
    tags: ['intermediate', 'figment', 'nodejs', 'smartcontract', 'truffle'],
  },
  {
    title: 'How to use Moola’s money market',
    description: 'This tutorial is a part of DeFi series where people can learn how to participate in DeFi on the Celo Blockchain.',
    preview: require('./showcase/beginner/how-to-use-moolas-money-market.png'),
    website: 'https://learn.figment.io/tutorials/moola-market',
    tags: ['beginner', 'figment'],
  },
  {
    title: 'Hackathons 101 - Everything you need to know about Hackathons',
    description: 'In this article we will discuss the benefits of attending events, including networking, learning new skills, and gaining exposure to new ideas.',
    preview: require('./showcase/beginner/hackathons-101-everything-you-need-to-know-about-hackathons.png'),
    website: '/blog/tutorials/hackathons-101-everything-you-need-to-know-about-hackathons',
    tags: ['celosage', 'beginner' ],
  },
  {
    title: 'Testing Celo Smart Contracts with Truffle',
    description: 'We will learn how to use Truffle in order to test smart contracts on Celo.',
    preview: require('./showcase/intermediate/testing-celo-smart-contracts-with-truffle.png'),
    website: 'https://learn.figment.io/tutorials/celo-testing-truffle',
    tags: ['intermediate', 'figment', 'nodejs', 'smartcontract', 'truffle', 'javascript'],
  },
  {
    title: 'Distributed File Manager (DFM) using Celo, IPFS and ReactJS',
    description: 'Learn how to make a Distributed File Manager using the IPFS protocol for storing files on the Celo network',
    preview: require('./showcase/advanced/distributed-file-manager-dfm-using-celo-ipfs-and-reactjs.png'),
    website: 'https://learn.figment.io/tutorials/distributed-file-manager-using-ipfs-celo-reactjs',
    tags: ['advanced','figment'],
  },
  {
    title: 'Introduction to dApp kit',
    description: 'In this tutorial we are going to make counter dapp with expo (react native).',
    preview: require('./showcase/intermediate/introduction-to-dapp-kit.png'),
    website: 'https://learn.figment.io/tutorials/introduction-to-dappkit',
    tags: ['intermediate', 'figment', 'reactnative', 'nodejs', 'truffle'],
  },
  {
    title: 'Build a Decentralized Autonomous Organization (DAO) on Celo',
    description: 'Build a functioning DAO by writing the Solidity smart contract and building a React Native dApp',
    preview: require('./showcase/advanced/build-a-decentralized-autonomous-organization-dao-on-celo.png'),
    website: 'https://learn.figment.io/tutorials/build-a-dao-on-celo',
    tags: ['advanced', 'figment'],
  },
  {
    title: 'How to re-deploy your Ethereum DApp on Celo',
    description: 'Learn how to re-deploy Ethereum Dapps on the Celo network.',
    preview: require('./showcase/beginner/how-to-redeploy-your-ethereum-dapp-on-celo.png'),
    website: 'https://learn.figment.io/tutorials/redeploy-ethereum-dapps-on-celo',
    tags: ['beginner', 'figment', 'truffle', 'javascript', 'cli'],
  },
  {
    title: 'Create Deploy and Mint your ERC223 contract on Celo with Hardhat',
    description: 'This tutorial is an expository piece on the ERC223 token standard, also explaining how to create and deploy a sample ERC223 contract',
    preview: require('./showcase/intermediate/ERC223-token-contract.png'),
    website: 'https://learn.figment.io/tutorials/create-deploy-and-mint-your-eRC223-contract-on-celo-with-hardhat',
    tags: ['intermediate', 'celo', 'celosage', 'javascript', 'hardhat', 'smartcontract', ],
  },
  {
    title: 'Create Vault Smart Contract',
    description: 'Learn how to create, deploy, and interact with Vault Smart Contract on the Celo Ecosystem',
    preview: require('./showcase/advanced/create-a-vault-smart-contract.png'),
    website: 'https://learn.figment.io/tutorials/create-vault-smart-contract',
    tags: ['advanced', 'figment', 'react', 'nodejs', 'smartcontract', 'truffle'],
  },
  {
    title: 'Introduction to Token Economics on Celo',
    description: 'A brief overview of the economic principles governing the Celo network and its native token',
    preview: require('./showcase/intermediate/token.png'),
    website: 'blog/tutorials/introduction-to-token-economics-on-celo',
    tags: ['celo', 'intermediate', 'celosage'],
  },
  {
    title: 'Send CELO & cUSD',
    description: 'Learn how to connect to the Celo test network and transfer tokens using ContractKit',
    preview: require('./showcase/intermediate/send-celo-and-cusd.png'),
    website: 'https://learn.figment.io/tutorials/send-celo-and-cusd',
    tags: ['intermediate', 'cusd', 'celo', 'figment'],
  },
  {
    title: 'Create subgraphs for Celo smart contracts',
    description: 'Learn how to integrate The Graph with CELO',
    preview: require('./showcase/intermediate/create-subgraphs-for-celo-smart-contracts.png'),
    website: 'https://learn.figment.io/tutorials/celo-subgraphs',
    tags: ['intermediate', 'subgraphs', 'figment'],
  },
  {
    title: 'Hello Mobile DApp',
    description: 'Learn how to create a simple mobile DApp using dAppKit and the React Native Expo framework',
    preview: require('./showcase/beginner/hello-celo-mobile-dapp.png'),
    website: 'https://learn.figment.io/tutorials/hello-mobile-dapp',
    tags: ['beginner', 'mobile', 'figment'],
  },

  // Videos

  {
    title: 'Deploy Celo Smart contracts with Remix IDE',
    description: 'Learn how to use Remix IDE for deploying Celo smart contracts',
    preview: require('./showcase/beginner/deploy-celo-smart-contracts-with-remix-ide.png'),
    website: 'https://learn.figment.io/tutorials/celo-for-remix',
    tags: ['beginner', 'remix', 'foundation'],
  },
  {
    title: 'How to create a ERC1155 NFT in Celo Network with Hardhat',
    description: 'Learn how to write a smart contract using the Solidity language and a contract from the Openzeppelin library for ERC1155 tokens.',
    preview: require('./showcase/intermediate/celo-crowd-funding-project-tutorial.png'),
    website: 'https://learn.figment.io/tutorials/celo-hardhat-deploy-and-nft-app',
    tags: ['intermediate', 'erc1155', 'nft', 'hardhat', 'figment'],
  },
  {
    title: 'Celo Crowd Funding Project Tutorial',
    description: 'Learn how to create a Smart Contract which facilitates crowdfunding.',
    preview: require('./showcase/advanced/celo-crowdfunding-project-tutorial.png'),
    website: 'https://learn.figment.io/tutorials/celo-crowd-funding-project',
    tags: ['advanced', 'figment', 'smartcontract', 'truffle', 'solidity'],
  },
  {
    title: 'How to create a Loyalty Program using Meta-transactions',
    description: 'What if users could get rewarded for transactions and not pay gas? This tutorial will show you how!',
    preview: require('./showcase/advanced/how-to-create-a-loyalty-program-using-meta-transactions.png'),
    website: '/blog/2022/07/27/how-to-create-a-loyalty-program-using-meta-transactions',
    tags: ['advanced', 'foundation'],
  },
  {
    title: 'Composer series: Building a decentralized news feed with Celo Composer',
    description: 'Build a decentralized news feed using React, Tailwind, IPFS, and Celo Composer.',
    preview: require('./showcase/advanced/celo-composer-building-a-decentralized-news-feed-with-celo-composer.png'),
    website: 'blog/tutorials/building-a-decentralized-newsfeed-with-celo-composer',
    tags: ['advanced', 'composer', 'foundation'],
  },
  {
    title: 'How to create an upgradeable smart contract in Celo',
    description: 'Everything you need to know about upgradable smart contracts.',
    preview: require('./showcase/advanced/how-to-create-an-upgradable-smart-contract-on-celo.png'),
    website: 'blog/tutorials/how-to-create-an-upgradeable-smart-contract-in-celo',
    tags: ['advanced', 'flutter', 'composer', 'foundation'],
  },
  {
    title: 'Bridging tokens to and from Celo via Wormhole',
    description: 'Wormhole has enabled the Celo chain.',
    preview: require('./showcase/advanced/bridging-tokens-to-and-from-celo-via-wormhole.png'),
    website: 'blog/tutorials/bridging-token-to-and-from-celo-via-wormhole',
    tags: ['advanced', 'foundation'],
  },
  {
    title: '9 Sustainable DeFi Projects Built on Celo',
    description: 'Creating the world’s first carbon-neutral blockchain was just the beginning.',
    preview: require('./showcase/beginner/9-sustainable-defi-projects-built-on-celo.png'),
    website: 'blog/tutorials/9-sustainable-defi-projects-built-on-celo',
    tags: ['beginner', 'foundation'],
  },
  {
    title: 'Composer Series - Building a Staking Defi App with Celo Composer',
    description: 'Building a Defi application to create, stake and receive rewards on your token using Celo composer.',
    preview: require('./showcase/intermediate/celo-composer-building-a-staking-defi-dapp.png'),
    website: 'blog/2022/10/27/building-a-defi-staking-dapp',
    tags: ['intermediate', 'foundation', 'composer', 'react', ],
  },
  {
    title: 'Build an On-Chain Puzzle Game on Celo',
    description: 'Learn how to build a On-Chain Puzzle Game on Celo using Solidity and Hardhat.',
    preview: require('./showcase/intermediate/on-chain-puzzle-game.png'),
    website: '/blog/tutorials/build-an-on-chain-puzzle-game-on-celo',
    tags: ['celosage', 'intermediate', 'solidity', 'hardhat'],
  },
  {
    title: 'A Practical Comparison Between ERC-1155 and ERC-721',
    description: 'An informative and practical comparison of two popular NFT standards, ERC-1155 and ERC-721, that delves into their technical details.',
    preview: require('./showcase/beginner/a-practical-comparison-between-erc-1155-and-erc-721.png'),
    website: '/blog/tutorials/a-practical-comparison-between-erc-1155-and-erc-721',
    tags: ['celosage', 'intermediate', 'erc1155', 'erc721', 'nft'],
  },
  {
    title: 'Understanding Role Based Access Control in Smart Contracts',
    description: 'In this tutorial, we will explore how to create a role-based control using openzeppelin library.',
    preview: require('./showcase/intermediate/understanding-role-based-access-control-in-smart-contracts.png'),
    website: '/blog/tutorials/understanding-role-based-access-control-in-smart-contracts',
    tags: ["celosage", "intermediate", "solidity", "hardhat", "openzeppelin", "react"],
  },

  // Videos

  {
    title: 'Panel Talk: Empowering Social Impact Through Web3',
    description: 'Join Nestor as he discusses social impact through Web3.',
    preview: require('./showcase/beginner/panel-talk-empowering-social-impact-through-web3.png'),
    website: 'https://www.youtube.com/watch?v=ZQUYGEI3yHQ',
    tags: ['beginner', 'video'],
  },
  {
    title: 'Tech Talk: Utilizing the ReFi Stack Thesis to Propel Web3 Project Idea Generation',
    description: 'Join Nirvaan from Climate Collective, and Nestor from Celo Foundation DevRel as they discuss the ReFi stack thesis to propel web3 project ideas.',
    preview: require('./showcase/beginner/tech-talk-utilizing-the-refi-stack-thesis-to-propel-web3-project-ideas.png'),
    website: 'https://www.youtube.com/watch?v=J7jyoDUIx3E&t=529s',
    tags: ['beginner', 'video'],
  },
  {
    title: 'Workshop: Introduction to Solidity and Remix',
    description: 'Join Harpal Jadeja (Twitter: @HarpalJadeja11) for a discussion with Viraz Malhotra from GoodGhosting (Twitter: @Viraz04). You will learn how to get started with Solidity and Remix online IDE.',
    preview: require('./showcase/beginner/workshop-introduction-to-solidity-and-remix.png'),
    website: 'https://www.youtube.com/watch?v=jr_P-26SdbE&t=656s',
    tags: ['beginner', 'video'],
  },
  {
    title: 'Workshop: Build a frontend for your smart contracts using react-celo',
    description: 'Join Nestor Bonilla (Twitter: @0xNestor) and Aaron Deruvo for this workshop! You will learn to utilize react-celo as a resource for frontend development by dissecting react-celo into a development approach for various javascript frameworks.',
    preview: require('./showcase/intermediate/workshop-build-a-front-end-for-your-smart-contracts-using-react-celo.png'),
    website: 'https://www.youtube.com/watch?v=3BT0sjXW1Uw',
    tags: ['intermediate', 'video'],
  },
  {
    title: 'Workshop: Introduction to Hardhat',
    description: 'Join Harpal Jadeja (Twitter: @HarpalJadeja11) and learn how to utilize Hardhat to deploy and test your smart contracts.',
    preview: require('./showcase/beginner/workshop-introduction-to-hardhat.png'),
    website: 'https://www.youtube.com/watch?v=W7nGdHKcIFw&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=6',
    tags: ['beginner', 'video'],
  },
  {
    title: 'Workshop: Build a DeFi staking dApp on Celo using Solidity',
    description: 'Join Ernest Nnmadi (Twitter: @ErnestElijah) for this workshop! You will learn how to build a DeFi stacking dApp on Celo.',
    preview: require('./showcase/advanced/workshop-build-a-defi-staking-dapp-on-celo-using-solidity.png'),
    website: 'https://www.youtube.com/watch?v=ke5OPItFaOQ&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=7',
    tags: ['advanced', 'video'],
  },
  {
    title: 'Tech Talk: Smart Contract Security and Auditing',
    description: 'Join Ryon Shamloo for this Tech Talk! He will discuss best security practices and known vulnerabilities.',
    preview: require('./showcase/advanced/tech-talk-smart-contract-security-and-auditing.png'),
    website: 'https://www.youtube.com/watch?v=CxIzZmG2bBI&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=8',
    tags: ['advanced', 'video'],
  },
  {
    title: 'Workshop: Integrating Programmable Carbon with Toucan',
    description: 'Join Harpal Jadeja (Twitter: @HarpalJadeja11)  and Alex Lazar for this workshop! You will learn about Toucan and how you can integrate their offerings into your hackathon project.',
    preview: require('./showcase/advanced/workshop-integrating-programmable-carbon-with-toucan.png'),
    website: 'https://www.youtube.com/watch?v=Y0-hzz_QbKg&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=9',
    tags: ['advanced', 'video'],
  },
  {
    title: 'Tech talk: stCelo',
    description: 'Join Harpal Jadeja (Twitter: @HarpalJadeja11)  and Mathieu for this workshop! You will learn about stCelo and how you can integrate their offerings into your hackathon project.',
    preview: require('./showcase/intermediate/tech-talk-stcelo.png'),
    website: 'https://www.youtube.com/watch?v=0PL31bwzdKA&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=10',
    tags: ['intermediate', 'video'],
  },
  {
    title: 'Workshop: Token gating content using Unlock Protocol',
    description: 'Join Harpal Jadeja (Twitter: @HarpalJadeja11)  and Angela Steffens for this workshop!',
    preview: require('./showcase/advanced/workshop-token-gating-content-using-unlock-protocol.png'),
    website: 'https://www.youtube.com/watch?v=B2O6FcgvXAI&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=12',
    tags: ['advanced', 'video'],
  },
  {
    title: 'Tech Talk: Smart Contract Security 201',
    description: 'Ryon Shamloo takes you through part two of his best security practices talk!',
    preview: require('./showcase/intermediate/tech-talk-smart-contract-security-201.png'),
    website: 'https://www.youtube.com/watch?v=HIEcAXshU8U&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=13',
    tags: ['intermediate', 'video'],
  },
  {
    title: 'The Future of Regenerative Finance and its potential impact',
    description: 'Learn about how Celo is committed to its mission of building a regenerative economy, potential impact of ReFi, the future of ReFi and more',
    preview: require('./showcase/beginner/the-future-of-regenerative-finance-and-its-potential-impact.png'),
    website: '/blog/tutorials/the-future-of-regenerative-finance-and-its-potential-impact',
    tags: ['beginner', 'celo', 'celosage'],
  },
  {
    title: 'Workshop: Building an exchange on Celo',
    description: 'Use Celo composer and Fiat-connect to build an exchange, Part I',
    preview: require('./showcase/intermediate/workshop-building-an-exchange-on-celo.png'),
    website: 'https://www.youtube.com/watch?v=O6DjaYFGLmE&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=15',
    tags: ['intermediate', 'video'],
  },
    {
    title: 'Building A Decentralized Investment Platform on the Celo blockchain',
    description: 'In this tutorial, we would build a mock investment platform that returns profit on the celo blockchain',
    preview: require('./showcase/intermediate/building-a-decentralized-investment-platform.png'),
    website: 'blog/tutorials/building-a-decentralized-investment-platform',
    tags: ['celosage','celowallet', 'celo', 'solidity', 'html', 'remix', 'smartcontract', 'intermediate'],
  },
  {
    title: 'Workshop: Building an exchange on Celo, Part II',
    description: 'Use Celo composer and Fiat-connect to build an exchange, Part II',
    preview: require('./showcase/advanced/workshop-building-an-exchange-on-celo-part-2.png'),
    website: 'https://www.youtube.com/watch?v=xxLWRUmAKvs&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=16',
    tags: ['advanced', 'video'],
  },
  {
    title: 'Introduction to Valora',
    description: 'Join this workshop for an introduction to Valora',
    preview: require('./showcase/beginner/introduction-to-valora.png'),
    website: 'https://www.youtube.com/watch?v=foamzu62nZk&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=18',
    tags: ['beginner', 'video'],
  },
  {
    title: 'Workshop: Building an NFT collection on Celo using Celo composer',
    description: 'Join Ewerton Lopes Pereira to build an NFT collection on Celo',
    preview: require('./showcase/intermediate/workshop-building-an-nft-collection-on-celo-using-celo-composer.png'),
    website: 'https://www.youtube.com/watch?v=hf5gTAQ8G10&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=19',
    tags: ['intermediate', 'video'],
  },
  {
    title: 'Introduction to Mento',
    description: 'Join Nestor Bonilla for an introduction to the Mento protocol',
    preview: require('./showcase/intermediate/introduction-to-mento.png'),
    website: 'https://www.youtube.com/watch?v=hf5gTAQ8G10&list=PLsQbsop73cfH5QYX9Olfw1fwu0rz3Slyj&index=19',
    tags: ['intermediate', 'video'],
  },
  {
    title: 'Overview of Developer Tools in the Celo Ecosystem',
    description: 'This article is to help you choose the right tool in the Celo ecosystem',
    preview: require('./showcase/beginner/overview-of-developer-tools-in-the-celo-ecosystem.png'),
    website: 'blog/tutorials/overview-of-developer-tools-in-the-celo-ecosystem',
    tags: ['celosage', 'react', 'composer', 'contractkit', 'cli', 'beginner'],
  },
  {
    title: 'How to Fractionalize an NFT on the Celo Platform',
    description: 'Building a dApp to fractionalize an NFT on top of Celo.',
    preview: require('./showcase/advanced/how-to-fractionalize-an-nft-on-the-celo-platform.png'),
    website: 'blog/tutorials/how-to-fractionalize-nft-on-celo-platform',
    tags: ['advanced', 'nft', 'celo', 'celosage'],
  },
  {
    title: 'Preventing Vulnerabilities in Solidity: Delegate Call',
    description: 'Understanding and preventing solidity vulnerabilities.',
    preview: require('./showcase/intermediate/solidity-vulnerabilities-delegated-call.png'),
    website: 'blog/tutorials/solidity-vulnerabilities-delegated-call',
    tags: ['celosage', 'advanced', 'solidity'],
  },
  {
    title: 'How to Create and Test Contract Calls with Celo and Hardhat',
    description: 'How to create and test contract calls with Celo and Hardhat.',
    preview: require('./showcase/intermediate/how-to-create-and-test-contract-calls-with-celo-and-hardhat.png'),
    website: 'blog/tutorials/how-to-create-and-test-contract-calls-on-hardhat',
    tags: ['celosage', 'intermediate', 'hardhat'],
  },
  {
    title: 'Redeploying Dapp to Celo.',
    description: 'How to Re Deploy your Ethereum DApp to Celo with Hardhat.',
    preview: require('./showcase/intermediate/how-to-redeploy-your-ethereum-dApp-to-celo-with-hardhat.png'),
    website: 'blog/tutorials/how-to-redeploy-your-ethereum-dApp-to-celo-with-hardhat',
    tags: ['intermediate', 'hardhat', 'celosage', 'smartcontract', 'deploy', 'solidity', 'celo'],
  },
  {
    title: 'How to Create your own DAO on Celo',
    description: 'Build your own DAO with on-chain governance',
    preview: require('./showcase/intermediate/how-to-create-your-own-dao-on-celo.png'),
    website: 'blog/tutorials/how-to-create-a-dao-on-celo',
    tags: ['celosage', 'intermediate', 'hardhat', 'solidity', 'dao'],
  },
  {
    title: 'How to Write Unit Testing for Smart Contract with Hardhat',
    description: 'How to write unit testing for smart contracts with Hardhat.',
    preview: require('./showcase/intermediate/how-to-write-unit-testing-for-smart-contracts-with-hardhat.png'),
    website: 'blog/tutorials/how-to-write-unit-testing-for-contracts-with-hardhat',
    tags: ['celo', 'intermediate', 'celosage', 'smartcontract', 'solidity'],
  },
  {
    title: 'Creating, Deploying, Minting your ERC1155 Token on Celo',
    description: 'How to Creating, Deploying, Minting your ERC1155 Token on Celo using Hardhat',
    preview: require('./showcase/intermediate/how-to-create-deploy-and-mint-your-erc1155-token-on-celo-with-hardhat.png'),
    website: 'blog/tutorials/how-to-create-deploy-and-mint-your-erc1155-token-on-celo-with-hardhat',
    tags: ['celo', 'intermediate', 'celosage', 'deploy', 'smartcontract', 'solidity', 'tokens', 'ipfs', 'hardhat'],
  },
  {
    title: 'Unit Testing with Truffle and Celo',
    description: 'How to write unit testing for smart contracts with Truffle.',
    preview: require('./showcase/beginner/how-to-write-unit-testing-for-contracts-with-truffle.png'),
    website: 'blog/tutorials/how-to-write-unit-testing-for-smart-contract-with-truffle',
    tags: ['intermediate', 'truffle', 'smartcontract', 'celosage'],

  },
  {
    title: 'Proof Of Stack Consensus',
    description: 'A Deep Dive into Celo Proof of Stake Consensus.',
    preview: require('./showcase/beginner/a-deep-dive-into-celo-proof-of-stake-consensus.png'),
    website: 'blog/tutorials/a-deep-dive-into-celo-proof-of-stake-consensus',
    tags: ['intermediate', 'smartcontract', 'celosage', 'celo'],
  },
  {
  title: 'Understanding the Decentralized Storage System',
  description: 'This tutorial is a comprehensive and explanatory guide to understanding the decentralized storage system',
  preview: require('./showcase/intermediate/understanding-the-decentralized-storage-system.png'),
  website: 'blog/tutorials/understanding-the-decentralized-storage-system',
  tags: ['celo', 'intermediate', 'celosage'],
},
{
  title: 'How to listen to smart contract On-Chain events with Celo',
  description: 'This tutorial teaches its readers about reading celo on-chain event',
  preview: require('./showcase/intermediate/how-to-listen-to-smart-contract-on-chain-event-with-celo.png'),
  website: 'blog/tutorials/how-to-listen-to-smart-contract-on-chain-event-with-celo',
  tags: ['celo', 'intermediate', 'celosage'],
},
  {
    title: 'Minting your ERC1155 Token on Celo',
    description: 'How to Minting your ERC1155 Token on Celo using Remix',
    preview: require('./showcase/intermediate/how-to-mint-your-erc1155-nft-on-celo-with-remix.png'),
    website: 'blog/tutorials/how-to-mint-your-erc1155-nft-on-celo-with-remix',
    tags: ['celo', 'intermediate', 'celosage', 'solidity', 'erc1155'],
  },
  {
    title: 'How To Download and Test The Celo Extension Wallet on Your Browser',
    description: 'How To Download and Test The Celo Extension Wallet on Your Browser.',
    preview: require('./showcase/beginner/how-to-download-and-test-the-Celo-extension-wallet-on-your-browser.png'),
    website: 'blog/tutorials/how-to-download-and-test-the-Celo-extension-wallet-on-your-browser',
    tags: ['celosage', 'video', 'beginner'],
  },
  {
    title: 'How to create an NFT with royalties on Celo',
    description: 'Building a dApp to mint an NFT with royalty',
    preview: require('./showcase/intermediate/how-to-create-an-nft-with-royalties-on-celo.png'),
    website: 'blog/tutorials/how-to-create-an-nft-with-royalties-on-celo',
    tags: ['celosage', 'nft', 'advanced'],
  },
  {
    title: 'How to build a marketplace for selling shoes on the celo blockchain',
    description: 'Learn how to build a marketplace for seliing shoes on the celo blockchain.',
    preview: require('./showcase/intermediate/How-to-Build-a-Marketplace-for-Selling-Shoes-on-Celo.png'),
    website: 'blog/tutorials/how-to-build-a-marketplace-for-selling-shoes-on-the-celo-blockchain',
    tags: ['celosage', 'solidity', 'intermediate'],
  },
  {
    title: 'Build a Frontend dApp for Celo Network in Angular',
    description: 'How to build a frontend for an NFT Auction dApp that runs on the Celo blockchain using Angular',
    preview: require('./showcase/intermediate/build-a-frontend-dapp-for-celo-network-in-angular.png'),
    website: 'blog/tutorials/build-a-frontend-dapp-for-celo-network-in-angular',
    tags: ['celosage', 'hardhat', 'advanced'],
  },
  {
    title: 'How to create interactive NFTs on Celo',
    description: 'Building a dApp to show interactive nfts',
    preview: require('./showcase/intermediate/how-to-create-interactive-nfts-on-celo.png'),
    website: 'blog/tutorials/how-to-create-interactive-nfts-on-celo',
    tags: ['celosage', 'nft', 'advanced'],
  },
  {
    title: 'Potential Growth of Blockchain and its Use Cases',
    description: 'In this tutorial, we will explore the current and potential future applications of blockchain technology',
    preview: require('./showcase/beginner/potential-growth-of-blockchain-and-its-use-cases.png'),
    website: 'blog/tutorials/potential-growth-of-blockchain-and-its-use-cases',
    tags: ['celosage', 'beginner'],
  },
  {
    title: 'Overview of NFTs on the Celo Platform',
    description: 'In this tutorial, we explore NFTs and what NFTs platforms are on Celo',
    preview: require('./showcase/beginner/overview-of-NFTs-on-the-Celo-Platform.png'),
    website: 'blog/tutorials/overview-of-nfts-on-the-celo-platform',
    tags: ['celosage', 'nft', 'celo', 'beginner'],
  },
  {
    title: 'Advance hardhat configration on celo using plugins',
    description: 'Leveraging plug-ins for better developer experience',
    preview: require('./showcase/intermediate/advance-hardhat-configuration-on-celo-using-plugins.png'),
    website: 'blog/tutorials/advance-hardhat-configuration-on-celo-using-plugins',
    tags: ['celosage', 'hardhat', 'intermediate', 'javascript'],
  },
  {
    title: 'Solidity from Zero to Hero',
    description: 'In this article you will learn Solidity language',
    preview: require('./showcase/beginner/solidity-from-zero-to-hero.png'),
    website: 'blog/tutorials/solidity-from-zero-to-hero',
    tags: ['celosage', 'intermediate'],
  },
  {
    title: 'Build an NFT Marketplace for Tech Artisans on Celo',
    description: 'This tutorial will show you how to use React, Solidity, react-celo, and IPFS to create a platform that connects creators and collectors in the NFT market space',
    preview: require('./showcase/intermediate/build-an-nft-marketplace-for-tech-artisans-on-celo.png'),
    website: 'blog/tutorials/build-an-nft-marketplace-for-tech-artisans-on-celo',
    tags: ['celosage', 'intermediate', 'react', 'ipfs', 'nft'],
  },
  {
    title: 'Getting Started On Celo With Hardhat',
    description: 'Providing Celo developers with comprehensive information on Web3 tools and their usage',
    preview: require('./showcase/beginner/getting-started-on-celo-with-hardhat.png'),
    website: 'blog/tutorials/getting-started-on-celo-with-hardhat',
    tags: ['celosage', 'hardhat', 'smartcontract', 'solidity', 'intermediate'],
  },
  {
    title: 'Regenerative Finance - What it is and Why it Matters',
    description: 'In this article, we will look into the financial protocol behind the Celo blockchain, the "how" and the "helps"',
    preview: require('./showcase/beginner/regenerative-finance-and-celo-the-process-and-partnership.png'),
    website: 'blog/tutorials/regenerative-finance-and-celo-the-process-and-partnership',
    tags: ['celosage', 'intermediate'],
  },
  {
    title: 'Best practices for writing smart contracts with real world examples',
    description: 'Showing some of the best practices for writing smart contracts',
    preview: require('./showcase/intermediate/best-practices-for-writing-smart-contracts-with-real-world-examples.png'),
    website: 'blog/tutorials/best-practices-for-writing-smart-contracts-with-real-world-examples',
    tags: ['celosage', 'intermediate', 'solidity', 'hardhat'],
  },
  {
    title: 'An Introduction to Layer 1 and Layer 2 Blockchain Protocols',
    description: 'In this tutorial, we will provide an introduction to the different types of blockchain protocols and explain the key differences between layer 1 and layer 2 protocols.',
    preview: require('./showcase/beginner/an-introduction-to-layer-1-and-layer-2-blockchain-protocols.png'),
    website: 'blog/tutorials/an-introduction-to-layer-1-and-layer-2-blockchain-protocols',
    tags: ['celosage', 'beginner'],
  },
  {
    title: 'Crypto Wallets - The Celo Way',
    description: 'This tutorials teaches you all you need to know about Crypto Wallets',
    preview: require('./showcase/beginner/crypto-wallets.png'),
    website: 'blog/tutorials/crypto-wallets-the-celo-way',
    tags: ['celosage', 'beginner'],
  },
  {
    title: 'How to create your first smart contract on the celo blockchain',
    description: 'This tutorials teaches you how to create your first sample smart contract and deploy it on the celo blockchain',
    preview: require('./showcase/beginner/create-your-first-smart-contract-on-celo.png'),
    website: 'blog/tutorials/create-your-first-smart-contract-on-celo',
    tags: ['celosage', 'remix', 'smartcontract', 'solidity'],
  },
  {
    title: 'Build a Simple Forum Dapp with Flutter on Celo',
    description: 'In this tutorial, we will guide you through the process of writing and deploying a simple forum smart contract on the Celo network, and then using Flutter to build a user-friendly interface for interacting with the contract.',
    preview: require('./showcase/intermediate/build-a-simple-forum-dapp-with-flutter-on-celo.png'),
    website: 'blog/tutorials/build-a-simple-forum-dapp-with-flutter-on-celo',
    tags: ['celosage', 'flutter', 'advanced'],
  },
  {
    title: 'Build a generic staking dapp using Foundry and NextJs',
    description: 'Compiling, testing and deploying contracts using foundry with frontend using Nextjs',
    preview: require('./showcase/advanced/build-a-generic-staking-dapp-using-foundry-and-nextjs.png'),
    website: 'blog/tutorials/build-a-generic-staking-dapp-using-foundry-and-nextjs',
    tags: ['celosage', 'advanced', 'smartcontract', 'solidity', 'nextjs', 'materialui', 'react'],
  },
  {
    title: 'Connect and interact with Celo using web3onboard library',
    description: 'A convenient library for connecting to Celo blockchain',
    preview: require('./showcase/intermediate/connect-and-interact-with-celo-using-web3onboard-library.png'),
    website: 'blog/tutorials/connect-and-interact-with-celo-using-web3onboard-library',
    tags: ['celosage', 'intermediate', 'smartcontract', 'solidity', 'nextjs', 'materialui', 'react'],
  },
  {
    title: 'Proof of Work vs Proof of Stake - A Comprehensive Comparison',
    description: 'In this article, we will provide a comprehensive comparison of proof of work and proof of stake.',
    preview: require('./showcase/beginner/proof-of-work-vs-proof-of-stake-a-comprehensive-comparison.png'),
    website: 'blog/tutorials/proof-of-work-vs-proof-of-stake-a-comprehensive-comparison',
    tags: ['celosage', 'intermediate'],
  },
  {
    title: 'Preventing Vulnerabilities in Solidity - Denial of Service Attack',
    description: 'The Denial of Service attack in Solidity is a comprehensive attack.',
    preview: require('./showcase/advanced/preventing-vulnerabilities-in-solidity-denial-of-service-attack.png'),
    website: 'blog/tutorials/preventing-vulnerabilities-in-solidity-denial-of-service-attack',
    tags: ['celosage', 'advanced'],
  },
  {
    title: 'Create a Crowdfunding Smart Contract on Celo using Hardhat',
    description: 'This tutorial teach developers how to build a crowdfunding contract on Celo, using Solidity and Hardhat framework.',
    preview: require('./showcase/advanced/create-a-crowdfunding-smart-contract-on-celo-using-hardhat.png'),
    website: 'blog/tutorials/create-a-crowdfunding-smart-contract-on-celo-using-hardhat',
    tags: ['celosage', 'solidity', 'hardhat', 'advanced'],
  },
  {
    title: 'Why should you use Celo Blockchain',
    description: 'In this tutorial, we will introduce you to the Celo blockchain and explain its key features and benefits in a way that is easy to understand, even for complete beginners.',
    preview: require('./showcase/beginner/why-should-you-use-celo.png'),
    website: '/blog/tutorials/why-should-you-use-celo',
    tags: ['celosage','celo', 'beginner'], 
  },
  {
    title: 'Build a Donation dApp on Celo to award your Favorite Content Creator',
    description: 'In this tutorial, we will show you how to create donation dApp to reward your favourite content creator.',
    preview: require('./showcase/advanced/build-a-donation-dapp-on-celo-to-award-your-favourite-content-creator.png'),
    website: '/blog/tutorials/build-a-donation-dapp-on-celo-to-award-your-favourite-content-creator',
    tags: ['celosage','celo', 'advanced'], 
  },
  {
    title: 'Create a Full Stack Whitelist dApp with Merkle Trees on CELO',
    description: 'Learn how you can use Merkle trees, a powerful data structure hierarchy, to efficiently verify if a particular data is part of a dataset',
    preview: require('./showcase/advanced/create-full-stack-whitelist-dapp-with-merkle-trees-celo.png'),
    website: 'blog/tutorials/create-full-stack-whitelist-dapp-with-merkle-trees-celo',
    tags: ['advanced', 'hardhat', 'celosage', 'solidity'],
  },
  {
    title: 'How to Use Hardware Tools with the Celo Blockchain',
    description: 'In this series, we will explore how hardware is driving the adoption of the Celo blockchain',
    preview: require('./showcase/intermediate/how-to-use-hardware-tools-with-the-celo-blockchain.png'),
    website: 'blog/tutorials/how-to-use-hardware-tools-with-the-celo-blockchain',
    tags: ['intermediate','celo','celosage'],
  },
  {
    title: 'Build feature-rich, persistent dapp on celo using wagmi',
    description: 'An alternative method of connecting to Celo networks',
    preview: require('./showcase/advanced/build-a-feature-rich-persistent-dapp-on-celo-using-wagmi.png'),
    website: 'blog/tutorials/build-a-feature-rich-persistent-dapp-on-celo-using-wagmi',
    tags: ['hardhat', 'celosage', 'solidity', 'react', 'nextjs', 'materialui', 'typescript'],
  },
  {
    title: 'Why you should Build your Next Project on the Celo Blockchain',
    description: 'This tutorial examines the features and capabilities of the Celo Blockchain',
    preview: require('./showcase/beginner/why-you-should-build-your-next-project-on-the-celo-blockchain.png'),
    website: '/blog/tutorials/why-you-should-build-your-next-project-on-the-celo-blockchain',
    tags: ['celosage','beginner','celo'],
  },
  {
    title: 'Simplifying the Celo 2.0 Roadmap for Celo Builders',
    description: 'This article breaks down the details of the Celo 2.0 roadmap into specific features, building requirements and outlooks as well as pointing out the developments that will follow this new roadmap.',
    preview: require('./showcase/beginner/simplifying-the-celo-2.0-roadmap-for-celo-builders.png'),
    website: '/blog/tutorials/simplifying-the-celo-2.0-roadmap-for-celo-builders',
    tags: ['celosage','celo'], 
  },
  {
    title: 'How to Add Support for Stablecoin Gas Fees using Celo Composer',
    description: 'Learn how to implement stablecoin gas fee support in your application, using the Solidity programming language and React for the front-end',
    preview: require('./showcase/intermediate/how-to-add-support-for-stablecoin-gas-fees-using-celo-composer.png'),
    website: 'blog/tutorials/how-to-add-support-for-stablecoin-gas-fees-using-celo-composer',
    tags: ['intermediate', 'hardhat', 'celosage', 'solidity'],
  },
  {
    title: 'Connect and interact with Celo using Web3React',
    description: 'Alternative method of connecting to Celo using web3React',
    preview: require('./showcase/advanced/connect-and-interact-with-celo-using-web3react.png'),
    website: 'blog/tutorials/connect-and-interact-with-celo-using-web3react',
    tags: ['celosage', 'advanced', 'smartcontract', 'solidity', 'nextjs', 'materialui', 'react'],
  },
  {
    title: 'How to build a crowdfunding platform on Celo',
    description: 'In this tutorial, we will guide you through the process of building a crowdfunding platform on the Celo blockchain',
    preview: require('./showcase/advanced/how-to-build-a-crowdfunding-platform-on-celo.png'),
    website: '/blog/tutorials/how-to-build-a-crowdfunding-platform-on-celo',
    tags: ['celosage','celo', 'advanced'], 
  },
  {
    title: 'Build an nft-gated dapp and deploy on a decentralized hosting service',
    description: 'An interesting use case for NFTs on Celo network',
    preview: require('./showcase/advanced/build-an-nft-gated-dapp-and-deploy-on-decentralized-hosting-service.png'),
    website: 'blog/tutorials/build-an-nft-gated-dapp-and-deploy-on-decentralized-hosting-service',
    tags: ['advanced', 'solidity', 'nextjs', 'celosage'],
  },
  {
    title: 'Example architectures for a simple payment dapp',
    description: 'This post will focus on the front-end part of how to create a simple payment dapp',
    preview: require('./showcase/beginner/example-architectures-for-a-simple-payment-dapp.png'),
    website: 'blog/tutorials/example-architectures-for-a-simple-payment-dapp',
    tags: ['javascript', 'react', 'beginner', 'celo'], 
  },
  {
    title: 'Interact with Celo Blockchain using web3dart',
    description: 'This article explains how to construct a dart program to communicate with the Celo blockchain using web3dart',
    preview: require('./showcase/beginner/interact-with-celo-blockchain-using-web3dart.png'),
    website: 'blog/tutorials/interact-with-celo-blockchain-using-web3dart',
    tags: ['celosage', 'flutter', 'beginner', 'celo'], 
  },
   {
    title: 'Build a Full-Stack Mobile DApp with React Native and Web.JS on Celo',
    description: 'Learn hoe to build chat app on celo network using react-native and web3js',
    preview: require('./showcase/intermediate/build-a-full-stack-mobile-dapp-with-react-native-and-webjs-on-celo.png'),
    website: 'blog/tutorials/build-a-full-stack-mobile-dapp-with-react-native-and-webjs-on-celo',
    tags: ['celosage', 'reactnative', 'intermediate', 'celo'], 
  },
  {
    title: 'What are PFP NFTs, How to Create Them?',
    description: 'PFP NFTs are blockchain-based digital assets used as profile pictures. To create one, design an image, choose a blockchain platform and compatible wallet, and mint it on an NFT marketplace.',
    preview: require('./showcase/intermediate/what-are-pfp-nfts-and-how-to-create-them.png'),
    website: 'blog/tutorials/what-are-pfp-nfts-and-how-to-create-them',
    tags: ['celosage', 'solidity', 'intermediate', 'celo', 'erc721', 'truffle'], 
  },
  {
    title: 'Developing a Crowdfunding Platform for Social Causes on Celo Blockchain - Part 1',
    description: 'A Celo-based crowdfunding platform for social causes would enable social organizations, charities, and individuals to create campaigns and connect directly with donors to donate funds, leveraging the transparency and security of blockchain technology.',
    preview: require('./showcase/intermediate/developing-a-crowdfunding-platform-for-social-causes-on-celo-blockchain-part-1.png'),
    website: 'blog/tutorials/developing-a-crowdfunding-platform-for-social-causes-on-celo-blockchain-part-1',
    tags: ['celosage', 'solidity', 'intermediate', 'celo', 'truffle'], 
  },
  {
    title: 'The Future of NFT Creation - Unleashing the Power of Batch Minting with ERC721psi',
    description: 'Batch minting with ERC721psi is an efficient way of creating multiple tokens at once, saving time and money. This feature is important for scalability and is implemented using smart contracts.',
    preview: require('./showcase/intermediate/the-future-of-nft-creation-unleashing-the-power-of-batch-minting-with-erc721psi.png'),
    website: 'blog/tutorials/the-future-of-nft-creation-unleashing-the-power-of-batch-minting-with-erc721psi',
    tags: ['celosage', 'erc721', 'intermediate', 'celo', 'solidity'], 
  },
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by apps tag, popular first
  result = sortBy(result, (user) => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
2;
