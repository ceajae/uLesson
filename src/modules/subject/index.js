import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import backArrow from "../../images/back_arrow.svg";
import LessonVideo from "../lessonVideo";
import LessonCard from "./lessonCard";
import Loader from "../shared/loader";


const SubjectChapters = (props) => {
  const [ error, setError ] = useState(null);
  const [ subject, setSubject ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);
  const [ openModal, setOpenModal ] = useState(false);
  const [ lessonInfo, setLessonInfo ] = useState({ chapterName: "", lesson: {}});
  const { chapterName, lesson } = lessonInfo;

  useEffect(() => {
      fetch("https://jackiechanbruteforce.ulesson.com/3p/api/content/grade")
          .then(res => res.json())
          .then(result => {
              const data = (result && result.data && result.data.subjects) || [];
              checkSelectedSubject(data);
          },

          (error) => {
              setIsLoading(false);
              setError(error);
          }
        )
  }, []);

  useEffect(() => {
      if (chapterName) {
          setOpenModal(true);
      }
  }, [chapterName, lesson])

  const checkSelectedSubject = (subjects) => {
      const { match } = props;
      const { params } = match;
      const selectedSubject = subjects.filter(item => (item.id) === (Number(params.subjectId)))[0];
      setSubject(selectedSubject);
      setIsLoading(false);
  }

  const handleSetLessonInfo = (chapterName, lesson) => {
      setLessonInfo({
          chapterName,
          lesson,
      })
  }

  const handleCloseModal = () => {
      setLessonInfo({ chapterName: "", lesson: {}})
      setOpenModal(false);
  }

  const goBack = () => {
      props.history.goBack();
  }


  if (error) return <div>Error: { error.message } </div>;

  if (isLoading) return <Loader />;

  return (
      <React.Fragment>
          <div className="subject-chapters-wrap">
                <div className="back-icon" onClick={goBack}>
                    <img src={backArrow} alt="backArrow" />
                </div>

                <div className="chapters-wrap">
                    <h1 className="itim_reg_48">{subject.name || ""}</h1>

                    {
                        subject.chapters.map((chapter, key) => (
                            <section key={key}>
                                <h2 className="chapter-title itim_reg_33">{`${key + 1}.  ${chapter.name}`}</h2>
                                <div className="lessons-wrap">
                                    {
                                        chapter.lessons.map((lesson, key) => (
                                              <LessonCard key={key} lesson={lesson} chapterName={chapter.name} onClick={handleSetLessonInfo} />
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }
                </div>

                <Modal
                    open={openModal}
                    closeOnOverlayClick={false}
                    aria-labelledby="my-modal-title"
                    aria-describedby="my-modal-description"
                >
                    <LessonVideo lessonInfo={lessonInfo} onClose={handleCloseModal} />
                </Modal>
          </div>
      </React.Fragment>
  )
}

export default SubjectChapters;
