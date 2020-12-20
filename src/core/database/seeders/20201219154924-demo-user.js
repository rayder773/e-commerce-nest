'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: '654af01f-177b-4aa3-a2c7-0be4dcbb8f96',
          quantity: 3177,
          price: 3540,
          compareAtPrice: 3445,
        },
        {
          id: '829d2c26-497c-4e28-be6f-f3514537d243',
          quantity: 387,
          price: 3735,
          compareAtPrice: 3958,
        },
        {
          id: 'ee953e2c-b2d4-4514-a9b0-8629c0b81fde',
          quantity: 1404,
          price: 3327,
          compareAtPrice: 2949,
        },
        {
          id: '39dc7df6-6c53-43ea-98ce-7c8a5b549786',
          quantity: 1993,
          price: 4802,
          compareAtPrice: 54,
        },
        {
          id: 'cf8730b2-a624-4a93-8bed-200c0eed0463',
          quantity: 931,
          price: 3766,
          compareAtPrice: 1865,
        },
        {
          id: '67a43718-5ebf-4c8f-8f5b-482f47eb7e22',
          quantity: 3646,
          price: 1244,
          compareAtPrice: 2952,
        },
        {
          id: '1b4e7c70-c857-4513-afb9-53d21dacb128',
          quantity: 3347,
          price: 2965,
          compareAtPrice: 1770,
        },
        {
          id: 'da1e7d14-e0bc-4882-9115-4b2472bd7ec8',
          quantity: 3981,
          price: 1988,
          compareAtPrice: 2533,
        },
        {
          id: 'aaff7c3e-713a-4d70-9b35-62dccdeffcc4',
          quantity: 2408,
          price: 4646,
          compareAtPrice: 3357,
        },
        {
          id: '8c9b944f-b5b4-4409-afee-20c14ff1479f',
          quantity: 3903,
          price: 3934,
          compareAtPrice: 3432,
        },
        {
          id: 'b317cf74-b714-41cf-9a41-1de7442b57e1',
          quantity: 1436,
          price: 185,
          compareAtPrice: 4849,
        },
        {
          id: '967db4fc-0081-486c-8a00-197e694e1e34',
          quantity: 1051,
          price: 3751,
          compareAtPrice: 2931,
        },
        {
          id: 'f880579c-104f-4321-a91b-dca743c51f20',
          quantity: 1852,
          price: 1516,
          compareAtPrice: 929,
        },
        {
          id: '7872a7ca-437b-4c75-b740-54120fb1e8ef',
          quantity: 875,
          price: 2200,
          compareAtPrice: 953,
        },
        {
          id: 'a8aaf439-4317-4dca-8fc1-e86ad7547480',
          quantity: 4839,
          price: 3774,
          compareAtPrice: 577,
        },
        {
          id: '95f9d323-e5f7-4015-9bdb-ac3aaf224c65',
          quantity: 2699,
          price: 1218,
          compareAtPrice: 2546,
        },
        {
          id: 'adff8870-6c2f-45f5-9812-9a8a5f4d085c',
          quantity: 893,
          price: 1975,
          compareAtPrice: 2054,
        },
        {
          id: '86bb4573-c65f-4eee-81b5-6ac3147994b4',
          quantity: 1925,
          price: 2406,
          compareAtPrice: 2539,
        },
        {
          id: '6358761f-86ea-4e41-8622-f9ed12d416ce',
          quantity: 177,
          price: 2466,
          compareAtPrice: 2607,
        },
        {
          id: 'd44493d6-3ed4-4e48-8db6-17b7fb4e9918',
          quantity: 2902,
          price: 2830,
          compareAtPrice: 1081,
        },
        {
          id: '521086ad-2353-467e-854c-7669045383dc',
          quantity: 2036,
          price: 1452,
          compareAtPrice: 2425,
        },
        {
          id: '4680437b-8c31-492c-86f3-e3e4474a30a7',
          quantity: 3282,
          price: 2499,
          compareAtPrice: 1527,
        },
        {
          id: 'e759db35-ca82-4dc8-9495-bd025e57c1c2',
          quantity: 3003,
          price: 51,
          compareAtPrice: 4452,
        },
        {
          id: 'e483c2ed-0f1c-45bd-9b2d-5d0b54fd8813',
          quantity: 3148,
          price: 4678,
          compareAtPrice: 2402,
        },
        {
          id: '982fabfd-bee4-48e2-972d-514f464be8f1',
          quantity: 4934,
          price: 486,
          compareAtPrice: 2243,
        },
        {
          id: 'f8254b91-c9cf-4f79-a8e1-e78d0e60bfb6',
          quantity: 613,
          price: 1536,
          compareAtPrice: 3966,
        },
        {
          id: '7f44d7f6-cce8-4076-9a9d-229f0ea023e2',
          quantity: 2241,
          price: 4418,
          compareAtPrice: 339,
        },
        {
          id: '85219d3b-c26d-4c38-a8a5-7511150a6b12',
          quantity: 872,
          price: 296,
          compareAtPrice: 582,
        },
        {
          id: '249fc52c-47a3-44b7-819f-39aef064e8e2',
          quantity: 4096,
          price: 688,
          compareAtPrice: 1472,
        },
        {
          id: 'eaa51d5c-0351-4002-8a24-f011fd167251',
          quantity: 120,
          price: 2752,
          compareAtPrice: 3495,
        },
        {
          id: '91e977cc-b2d1-4bc5-b4bf-ca12f3740043',
          quantity: 3543,
          price: 2255,
          compareAtPrice: 436,
        },
        {
          id: '4edc7d9e-3477-4957-83cc-0280f13a41e6',
          quantity: 1976,
          price: 1760,
          compareAtPrice: 2317,
        },
        {
          id: 'dc6f3d7f-429c-4851-9309-ee8732c67d17',
          quantity: 3041,
          price: 1765,
          compareAtPrice: 959,
        },
        {
          id: '042ab700-f0b3-4009-9ca2-7438e77ec48a',
          quantity: 4944,
          price: 4434,
          compareAtPrice: 1068,
        },
        {
          id: '27a987ac-b232-44c7-8494-0360bc80aa44',
          quantity: 2049,
          price: 3777,
          compareAtPrice: 4624,
        },
        {
          id: '02f53b7b-a6d0-4f7a-95a1-304817ed0c07',
          quantity: 1090,
          price: 2574,
          compareAtPrice: 3360,
        },
        {
          id: '38a5ce01-45a0-4bb1-88b5-f7008baf9cf3',
          quantity: 4129,
          price: 3642,
          compareAtPrice: 1705,
        },
        {
          id: '9f1eb0e7-834d-4e44-8cca-e1e6ab0c38b7',
          quantity: 2139,
          price: 4008,
          compareAtPrice: 4114,
        },
        {
          id: '6c521dd1-5cb6-4c28-95db-bc9e28926d0c',
          quantity: 640,
          price: 1974,
          compareAtPrice: 3578,
        },
        {
          id: '25af8d9a-cd31-4312-b512-b7e3cc9e60f9',
          quantity: 3586,
          price: 1158,
          compareAtPrice: 786,
        },
        {
          id: '129c7a77-feb0-4472-9a5c-9cbb0af2ada9',
          quantity: 316,
          price: 2854,
          compareAtPrice: 537,
        },
        {
          id: '91041895-d751-476f-a370-06cf0d2a4ec9',
          quantity: 3790,
          price: 2157,
          compareAtPrice: 4878,
        },
        {
          id: '5fe660cb-8090-435d-89a3-edb1de2a638f',
          quantity: 2386,
          price: 4278,
          compareAtPrice: 797,
        },
        {
          id: 'cc6e3a6d-6731-4950-8515-d9d7d9ae48e3',
          quantity: 2223,
          price: 4866,
          compareAtPrice: 2953,
        },
        {
          id: '37c42aba-5b2c-4fe1-99e8-7d67149d200d',
          quantity: 3894,
          price: 3527,
          compareAtPrice: 1792,
        },
        {
          id: '8a1bd41f-e19f-458e-b950-ea9bb250a4a0',
          quantity: 2602,
          price: 3139,
          compareAtPrice: 4631,
        },
        {
          id: '904f0a9c-368d-49d1-acbd-330043e4d3e0',
          quantity: 918,
          price: 2144,
          compareAtPrice: 4251,
        },
        {
          id: '40e88afd-6129-4796-b565-b28339e62384',
          quantity: 1822,
          price: 4921,
          compareAtPrice: 4483,
        },
        {
          id: '4472630b-4dd3-4264-8e5b-d5bc3eca1eec',
          quantity: 3153,
          price: 1729,
          compareAtPrice: 2184,
        },
        {
          id: 'd17774a9-5588-4c3e-8753-cf93ccdaed99',
          quantity: 2770,
          price: 2661,
          compareAtPrice: 3105,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
