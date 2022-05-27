import { IBlockCodeProps, useBlockCode } from 'block-code'
import { FC } from 'react'

const OtpCode: FC<IBlockCodeProps> = (props) => {

    const { className, ...restProps } = props
    const { ids, onCreateInputProps } = useBlockCode(restProps)
    return (
        <div className={className}>
            {ids.map((id, index) => (
                <input key={id} {...onCreateInputProps(index)} />
            ))}
        </div>
    )
    // return (
    //     <BlockCode
    //         className="block-code-underline"
    //         onValidateBeforeChange={onValidateBeforeChange}
    //         {...props}
    //     />
    // );
}
export default OtpCode;