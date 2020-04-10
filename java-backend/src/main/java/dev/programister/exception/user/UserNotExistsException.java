package dev.programister.exception.user;

public class UserNotExistsException extends Exception {
    public UserNotExistsException(String info) {
        super(info);
    }
}
