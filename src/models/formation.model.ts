// models/Formation.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface for the Formation document
interface IFormation extends Document {
  title: string;
  start_at: Date;
  end_at: Date;
  employeeId: mongoose.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}

// Formation schema
const formationSchema: Schema = new Schema({
  title: { type: String, required: true },
  start_at: { type: Date, required: true },
  end_at: { type: Date, required: true },
  employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Formation model
const Formation = mongoose.model<IFormation>('Formation', formationSchema);

export default Formation;
