const { qrModel } = require("../../../module");

async function qrSolution(req, res) {
    try {
        const data = req.body;

        // Send the response first
        res.status(200).json({
            status: true,
            message: "Response sent",
        });

        // Introduce a delay of, for example, 1 second (1000 milliseconds)
        setTimeout(async () => {
            const model = new qrModel({
                name: data?.name,
                email: data?.email,
                country: data?.country,
                phone: data?.phone,
                job: data?.job,
                company: data?.company,
                utm_source: data?.utm_source,
                utm_medium: data?.utm_medium,
                utm_campaign: data?.utm_campaign,
            });

            const isSave = await model.save();

            if (!isSave) {
                console.error('Something went wrong while saving data.');
            } else {
                console.log('Data saved successfully.');
            }
        }, 1000); // 1000 milliseconds = 1 second
    } catch (error) {
        res.status(405).json({
            status: false,
            message: error.message,
        });
    }
}

module.exports = qrSolution;
