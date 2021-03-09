import React, { useState, useEffect } from "react";
import SubjectCard from "./subjectCard";
import LessonCard from "./lessonCard";
import Loader from "../shared/loader";


const Dashboard = () => {
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ subjectsList, setSubjectsList ] = useState([]);

  useEffect(() => {
      fetch("https://jackiechanbruteforce.ulesson.com/3p/api/content/grade")
          .then(res => res.json())
          .then(result => {
              const data = (result && result.data && result.data.subjects) || [];
              setIsLoading(false);
              setSubjectsList(data);
          },

          (error) => {
              setIsLoading(false);
              setError(error);
          }
        )
  }, []);

  if (error) return <div>Error: { error.message } </div>

  if (isLoading) return <Loader />

  return(
      <React.Fragment>
          <div className="dashboard">
              <section>
                  <h1 className="itim_reg_48">Hello Hassan,</h1>
                  <div className="subjects-wrap">
                      {
                          subjectsList.map((item) => (
                              <SubjectCard data={item} key={item.id} />
                          ))
                      }
                  </div>
              </section>

              <section className="recent-videos">
                  <div className="recent-videos-header">
                      <h2 className="itim_reg_28">Recently watched topics</h2>
                      <button className="muli_reg_14">see all</button>
                  </div>
                  <div className="lessons-wrap">
                      {
                          subjectsList.map((item) => (
                              <LessonCard data={item} key={item.id} />
                          ))
                      }
                  </div>
              </section>

              <section className="recomm-videos">
                  <div className="recomm-videos-header">
                      <h2 className="itim_reg_28">Recommended videos</h2>
                      <button className="muli_reg_14">see all</button>
                  </div>
                  <div className="lessons-wrap">
                      {
                          subjectsList.map((item) => (
                              <LessonCard data={item} key={item.id} />
                          ))
                      }
                  </div>
              </section>
          </div>
      </React.Fragment>
  );
}

export default Dashboard;
