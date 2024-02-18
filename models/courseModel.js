const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseCode: { type: Number, required: true },
  courseName: { type: String, required: true },
  description: { type: String }, // Additional field: Description of the course
  prerequisites: [{ type: String }], // Additional field: Prerequisites for the course
  duration: { type: String }, // Additional field: Duration of the course
  location: { type: String }, // Additional field: Location of the course
  tags: [{ type: String }], // Additional field: Tags or categories for the course
  image: { type: String }, // Additional field: Image or thumbnail for the course
  enrollmentLimit: { type: Number }, // Additional field: Maximum number of students allowed to enroll
  status: { type: String, enum: ['active', 'inactive', 'upcoming'], default: 'active' }, // Additional field: Status of the course
  instructors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  schedules: [{
    semester: String,
    startDate: Date,
    endDate: Date,
    sessions: [{ day: String, time: String }],
  }],
  reviews: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Review' 
  }], // Additional field: Reviews for the course
  resources: [{ 
    title: String, 
    url: String 
  }] // Additional field: Additional resources related to the course
});

// Course Materials
const materialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Additional field: Author of the material
    createdAt: { type: Date, default: Date.now }, // Additional field: Date and time when the material was created
  });
  
  // Course Syllabus
  const syllabusSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Additional field: User who created the syllabus
    createdAt: { type: Date, default: Date.now }, // Additional field: Date and time when the syllabus was created
  });
  
  // Course Grade Criteria
  const gradeCriteriaSchema = new mongoose.Schema({
    title: { type: String, required: true },
    criteria: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Additional field: User who created the grade criteria
    createdAt: { type: Date, default: Date.now }, // Additional field: Date and time when the grade criteria was created
  });

const Course = mongoose.model('Course', courseSchema);
const Material = mongoose.model('Material', materialSchema);
const Syllabus = mongoose.model('Syllabus', syllabusSchema);
const GradeCriteria = mongoose.model('GradeCriteria', gradeCriteriaSchema);

module.exports = {
  Course,
  Material,
  Syllabus,
  GradeCriteria,
};
