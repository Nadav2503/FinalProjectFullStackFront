import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CustomButton from './CustomButton';

export default function ConfirmDialog({ open, onClose, onConfirm, title, message }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{message}</Typography>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={onClose} color="secondary">
                    Cancel
                </CustomButton>
                <CustomButton onClick={onConfirm} color="primary">
                    Confirm
                </CustomButton>
            </DialogActions>
        </Dialog>
    );
}
