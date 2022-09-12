function run(a,b) {
  if(arguments.length === 1) {
    console.log(`${a} run`)
  } else {
    console.log(`${a} run a ${b}`)
  }
}

run('i');
run('i','computer');