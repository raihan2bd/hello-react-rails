greetings = [
  "Hello World!",
  "Hello Universe!",
  "Hello Cosmos!"
]

greetings.each do |message|
  Greeting.create(message: message)
end
