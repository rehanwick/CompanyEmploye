const { Kafka } = require("kafkajs");

const {comapnyByNameInternalService } = require('../internal-service-call')



const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092", "kafka2:9092"],
});

const kafkaCreatFolder = async () => {
  const consumer = kafka.consumer({ groupId: "delete-employe-grroup" });
  
  // Consuming
  await consumer.connect();
  await consumer.subscribe({
    topic: "delete-employe-topic",
    fromBeginning: true,
  });
   
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
      id = JSON.parse(message.value.toString());
      await comapnyByNameInternalService({id}) ; 
    }
  });


};

kafkaCreatFolder().catch((error)=>{console.error(error);});
