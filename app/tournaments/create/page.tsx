// import { useState } from "react";
// import { createActionClient } from '@/utils/supabase/actions';

// export default  function CreateTournamentPage() {
//   const supabase = createActionClient();
//   const [name, setName] = useState("");
//   const [courses, setCourses] = useState<string[]>([""]);
//   const [loading, setLoading] = useState(false);

//   const addCourse = () => {
//     setCourses([...courses, ""]);
//   };

//   const updateCourse = (value: string, index: number) => {
//     const updated = [...courses];
//     updated[index] = value;
//     setCourses(updated);
//   };

//   const handleSubmit = async () => {
//   setLoading(true);

//   // 1. Get logged-in user
//   const {
//     data: { user },
//     error: userError,
//   } = await supabase.auth.getUser();

//   if (userError || !user) {
//     console.error("No user logged in");
//     setLoading(false);
//     return;
//   }

//   // 2. Insert tournament WITH user_id
//   const { data: tournament, error } = await supabase
//     .from("tournaments")
//     .insert([
//       {
//         name,
//         user_id: user.id, // ✅ THIS is what you were missing
//       },
//     ])
//     .select()
//     .single();

//   if (error || !tournament) {
//     console.error(error);
//     setLoading(false);
//     return;
//   }

//   // 3. Insert courses
//   const courseRows = courses
//     .filter((c) => c.trim() !== "")
//     .map((course) => ({
//       tournament_id: tournament.id,
//       course_name: course,
//     }));

//   const { error: courseError } = await supabase
//     .from("tournament_courses")
//     .insert(courseRows);

//   setLoading(false);

//   if (courseError) {
//     console.error(courseError);
//     return;
//   }

//   alert("Tournament created!");
//   setName("");
//   setCourses([""]);
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow">

//         <h1 className="text-2xl font-bold mb-6">
//           Create Tournament ⛳
//         </h1>

//         {/* Tournament name */}
//         <input
//           placeholder="Tournament name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded mb-6"
//         />

//         {/* Courses */}
//         <div className="space-y-3">
//           <p className="font-medium">Courses / Locations</p>

//           {courses.map((course, i) => (
//             <input
//               key={i}
//               value={course}
//               onChange={(e) => updateCourse(e.target.value, i)}
//               placeholder={`Course ${i + 1}`}
//               className="w-full border p-2 rounded"
//             />
//           ))}

//           <button
//             onClick={addCourse}
//             type="button"
//             className="text-blue-600 text-sm"
//           >
//             + Add another course
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="w-full mt-6 bg-blue-600 text-white py-2 rounded"
//         >
//           {loading ? "Creating..." : "Create Tournament"}
//         </button>
//       </div>
//     </div>
//   );
// }