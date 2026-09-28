

const mongodbUrl=process.env.MONGO_URI

if(!mongodbUrl) throw new Error("Mongo uri Is Missing")

  