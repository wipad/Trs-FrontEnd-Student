import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfileForm from './forms/ProfileForm';
import InternshipPlaceForm from './forms/InternshipPlaceForm';
import FinishForm from './forms/FinishForm';
import GoToHomePageForm from './forms/GoToHomePageForm';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const steps = ['บันทึกข้อมูลส่วนตัว', 'บันทึกข้อมูลที่ฝึกงาน', 'สำเร็จแล้ว'];

export default function RegisterView() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [noti, setNoti] = React.useState({
    open: false,
    msg: ''
  });

  const history = useHistory();
  const register = useSelector(state => state.register);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {


    switch (activeStep) {
      case 0:
        if (register.firstName === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ชื่อจริง ของคุณ'
          })
        } else if (register.lastName === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ นามสกุล ของคุณ'
          })
        } else if (register.studentId === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ รหัสนักศึกษา ของคุณ'
          })
        } else if (register.birthday === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ วันเดือนปีเกิด ของคุณ'
          })
        } else if (register.age === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ อายุ ของคุณ'
          })
        } else if (register.gender === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ เพศ ของคุณ'
          })
        } else if (register.idCardNumber === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ เลขบัตรประชาชน ของคุณ'
          })
        } else if (register.email === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ email ของคุณ'
          })
        } else if (register.phoneNumber === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ เบอร์โทรศัพท์ ของคุณ'
          })
        } else if (register.faculty === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ คณะ ของคุณ'
          })
        } else if (register.branch === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ สาขา ของคุณ'
          })
        } else if (register.studentClass === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ชั้นปี ของคุณ'
          })
        } else if (register.address === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ที่อยู่ ของคุณ'
          })
        } else {
          if (register.idCardNumber.length !== 13) {
            setNoti({
              open: true,
              msg: 'เลขบัตรประชาชน ของคุณ มากกว่าหรือน้อยกว่า 13 หลัก'
            })
          } else if (!register.email.includes('@')) {
            setNoti({
              open: true,
              msg: 'กรุณาระบุ email ไม่ถูกต้อง'
            })
          } else if (register.phoneNumber.length !== 10) {
            setNoti({
              open: true,
              msg: 'เบอร์โทรศัพท์ ของคุณ มากกว่าหรือน้อยกว่า 10 หลัก'
            })
          } else {
            let newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            handleNext();
          }

        }
        break;
      case 1:
        if (register.internshipName === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ชื่อที่ฝึกงาน ของคุณ'
          })
        } else if (register.internshipPosition === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ตำแหน่งที่ฝึกงาน ของคุณ'
          })
        } else if (register.internshipAddress === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ที่อยู่ที่ฝึกงาน ของคุณ'
          })
        } else if (register.caretakerName === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ ชื่อผู้ดูแล ของคุณ'
          })
        } else if (register.caretakerEmail === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ อีเมลผู้ดูแล ของคุณ'
          })
        } else if (register.caretakerPhoneNumber === "") {
          setNoti({
            open: true,
            msg: 'กรุณาระบุ เบอร์โทรศัพท์ผู้ดูแล ของคุณ'
          })
        } else {
          if (!register.caretakerEmail.includes('@')) {
            setNoti({
              open: true,
              msg: 'กรุณาระบุ อีเมลผู้ดูแล ไม่ถูกต้อง'
            })
          } else if (register.caretakerPhoneNumber.length !== 10) {
            setNoti({
              open: true,
              msg: 'เบอร์โทรศัพท์ผู้ดูแล ของคุณ มากกว่าหรือน้อยกว่า 10 หลัก'
            })
          } else {
            let newCompleted = completed;
            newCompleted[activeStep] = true;
            setCompleted(newCompleted);
            handleNext();
          }
        }
        break;
      case 2:
        let newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
        break;
      default:
        break;
    }

    console.log(activeStep, typeof activeStep);
  };

  const handleGoFirstPage = () => {
    setActiveStep(0);
    setCompleted({});
    history.push('/')

  };

  const handleClose = () => {
    setNoti({
      open: false,
      msg: ''
    })
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <GoToHomePageForm></GoToHomePageForm>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleGoFirstPage}>{"ไปหน้าแรก"}</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (<ProfileForm />)}
            {activeStep === 1 && (<InternshipPlaceForm />)}
            {activeStep === 2 && (<FinishForm />)}
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep}</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                {"ย้อนกลับ"}
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'เสร็จสิ้น'
                      : activeStep === 0 ? 'บันทึกข้อมูลส่วนตัว' : activeStep === 1 && 'บันทึกข้อมูลที่ฝึกงาน'}
                  </Button>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'เสร็จสิ้น'
                      : activeStep === 0 ? 'บันทึกข้อมูลส่วนตัว' : activeStep === 1 && 'บันทึกข้อมูลที่ฝึกงาน'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      <Snackbar open={noti.open} autoHideDuration={6000} onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="error">
          {t(`${noti.msg}`)}
        </Alert>
      </Snackbar>
    </Box>
  );
}
