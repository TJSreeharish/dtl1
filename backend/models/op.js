const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017/test";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const appointments = database.collection('appointments');

        const aggregationPipeline = [
            {
                $group: {
                    _id: "$doctorEmail",
                    "5-6": {
                        $sum: {
                            $cond: [{ $eq: ["$timings", "5-6"] }, 1, 0]
                        }
                    },
                    "6-7": {
                        $sum: {
                            $cond: [{ $eq: ["$timings", "6-7"] }, 1, 0]
                        }
                    },
                    "7-8": {
                        $sum: {
                            $cond: [{ $eq: ["$timings", "7-8"] }, 1, 0]
                        }
                    },
                    "8-9": {
                        $sum: {
                            $cond: [{ $eq: ["$timings", "8-9"] }, 1, 0]
                        }
                    }
                }
            }
        ];

        const result = await appointments.aggregate(aggregationPipeline).toArray();

        console.log("Doctor Email\t5-6\t6-7\t7-8\t8-9");
        result.forEach(doc => {
            console.log(`${doc._id}\t${doc["5-6"]}\t${doc["6-7"]}\t${doc["7-8"]}\t${doc["8-9"]}`);
        });

    } finally {
        await client.close();
    }
}

main().catch(console.error);