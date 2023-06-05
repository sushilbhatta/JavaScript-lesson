console.log('hello world')

function* simpleGenerator() {
    console.log('before 1');
    yield 1
    console.log('after 1');
    console.log('before 2');
    yield 2
    console.log('after 2');
    console.log('before 3');
    yield 3
    console.log('after 3');
}

const generator =simpleGenerator()
console.log(generator)

generator.next()

generator.next()
generator.next()
