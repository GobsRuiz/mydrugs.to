<template>
  <section class="faq max-w-[1300px] mx-auto box-border px-4">
    <h1 class="text-center text-customWhite-100 text-4xl font-black mb-8">
        Frequently Asked Questions
    </h1>

    <div class="faq__questions max-w-[800px] mx-auto">
        <div 
            v-for="(question, index) in questions" 
            :class="[
                'faq__questions__question',
                (questions.length - 1) != index ? 'mb-8' : ''
            ]"
        >
            <h3 class="text-customWhite-100 text-xl font-bold mb-3">
                {{ question.title }}
            </h3>
            
            <p class="text-customWhite-400 text-md font-semibold">
                {{ question.description }}
            </p>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const questions = [
    {
        title: "Is my purshase completely secure through your shop when I make a Purchase?",
        description: "Yes. Just add the desired quantity to the cart and enter your address at the checkout. Your personal data is automatically encrypted using PGP and deleted after the order is dispatched. Our team of professionals then packs the goods in clean-room conditions, and ensures smooth and secure processing.",
    },
    {
        title: "Can I really only pay with cryptocurrency?",
        description: "Yes. We only accept payments in Bitcoin, Ripple, IOTA, and Ethereum. The payment procedure is not complicated. You just need to set up a suitable wallet. We do not offer Payback or other bonus systems. We weren't born yesterday.",
    },
    {
        title: "How can I receive my order anonymously?",
        description: "Our shipping department operates around the clock to ensure fast and risk-free shipping. The delivery ussually arrives within a few days. Your order can be sent to any valid postal address, PO box, or package station. Thanks to our highly complex and decentralized system, the transfer to the logistics service provider is already anonymous and cannot be traced back.",
    },
    {
        title: "Is your product safe?",
        description: "Nobody has claimed that doing drugs was safe. However as long as you follow the guide in the Safety section there should not be any issues. Do not take MDMA if you are also under any perscriptions or doing any other drugs. It is also recomended not to take MDMA with any sort of alcohol as it might cause irreversable damage to your immune system and overall health.",
    },
    {
        title: "Is any of this real?",
        description: "No. Of course not. Do you think we are dumb enough to open a clear web drug shop. We hosted this on Google Cloud for god's sake. Did you honestly think that a made up website from a Netflix series would be the best place to score MDMA?",
    },
]
</script>

<style lang="scss" scoped>
.faq{

}
</style>