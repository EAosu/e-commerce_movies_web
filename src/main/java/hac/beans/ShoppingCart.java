package hac.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serializable;
import java.util.ArrayList;

/* this is a simple bean class instantiated in session */

@Component
public class ShoppingCart implements Serializable {
    private ArrayList<MovieItem> cart;

    public ShoppingCart() {
        this.cart = new ArrayList<>();
    }
    public void addToCart(String movieName, int movieId) {
        MovieItem item = new MovieItem(movieName, movieId);
        cart.add(item);
    }

    public ArrayList<MovieItem>  getCart() {
        return cart;
    }

    public void setCart(ArrayList<MovieItem>  cart) {
        this.cart = cart;
    }

    public void add (MovieItem m) {
        cart.add(m);
    }
    public int getSize() {
        return cart.size();
    }
}