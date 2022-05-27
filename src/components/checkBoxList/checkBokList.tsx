import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import { CheckBoxButtonStyled, CheckBoxItemStyled } from './checkBoxList.styles';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';

export interface ListValue {
    objectKey: string,
    key: number
    text: string,
    description: string
}

export default function CheckboxList({ list, handleChecked, checked }: any) {
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        //setChecked(newChecked);
        handleChecked(newChecked);
        //checked = checkedItem
    };

    return (
        <List sx={{ width: '100%' }}>
            {list.map((value: ListValue, index: number) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <Zoom
                        key={value.objectKey + index}
                        in={list.length > 0}
                        timeout={index * 200}
                        style={{ transitionDelay: list.length > 0 ? '500ms' : '0ms' }}>
                        <ListItem
                            key={value.key}
                            sx={{ margin: '0' }} >
                            <Paper style={{ borderRadius: '8px', width: '100%' }} elevation={3}>

                                <CheckBoxButtonStyled role={undefined} onClick={handleToggle(value.key)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value.key) !== -1}
                                            tabIndex={-1}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <CheckBoxItemStyled
                                        secondary={value.description}
                                        id={labelId}
                                        primaryTypographyProps={{
                                            fontSize: '1.2rem',
                                            fontWeight: 'medium'
                                        }}
                                        primary={value.text} />
                                </CheckBoxButtonStyled>
                            </Paper>
                        </ListItem>
                    </Zoom>
                );
            })}
        </List>
    );
}