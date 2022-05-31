<template>
  <footer class="footer">
      <h2 class="footer__title">{{ title }}</h2>
      <p class="footer__contactUs">{{ contactUs }}</p>
      <p class="footer__text">or</p>
      <p class="footer__text">CHECKOUT:</p>
      <img src="/icons/some.svg" alt="social media links">
  </footer>
</template>

<script>
    export default {
        data() {
            return {
                title: 'THE NORWEGIAN BOOKSTORE',
                contactUs: 'CONTACT US: norwegianbookstore@nb.no'
            }
        }
    }
</script>

<style>
    .footer {
        width: 100%;
        height: 13vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--light);
        background-color: var(--main);
    }

    .footer__contactUs, .footer__text{
        font-size: 1.4em;
    }

    .footer__text {
        font-weight: var(--details);
    }

    @media screen and (max-width: 1300px) {
        .footer {
            height: 25%;
            flex-direction: column;
            padding: var(--padding-small);
        }

        .footer__contactUs, .footer__text{
            font-size: 1em;
        }
    }
</style>