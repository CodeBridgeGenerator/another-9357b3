
    module.exports = function (app) {
        const modelName = 'application';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ApplicationName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 150, index: true, trim: true, default: '' },
Language: { type: String, required: false , enum: ["English","Malay","Spanish","Mandarin"] },
TimeZone: { type: Date, required: false },
AppPerformance: { type: Number, required: false, min: 0, max: 1000000 },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };