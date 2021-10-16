import React from "react";
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'


function T(props) {

      const { text, children } = props
      const { t } = useTranslation()

      const [msg, setMsg] = React.useState("")
      React.useEffect(() => {
            if (children !== undefined && text !== undefined) {
                  setMsg(t(`${children}`))
            } else if (children !== undefined) {
                  setMsg(t(`${children}`))
            } if (text !== undefined) {
                  setMsg(t(`${text}`))
            }
      }, [text, children, t])

      return msg
}

T.propTypes = {
      text: PropTypes.string,
      children: PropTypes.string,
}

export default T