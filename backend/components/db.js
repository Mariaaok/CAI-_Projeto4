
let mockup = {
    profiles: [
        { id: '001', name: "Fulano", email: 'fulano@detal.com', password: '123' },
        { id: '002', name: "Beltrano", email: 'beltrano@detal.com', password: '123' },
    ],
    account: [
        { id: '001', profileId: "001" },
        { id: '002', profileId: "002" },
    ],
    messages: [
        { id: '001', content: "ola mundo", userId: '001' },
        { id: '002', content: "test message", userId: '001' },
        { id: '003', content: "testando 123...", userId: '002' },
    ]
}


module.exports = mockup
