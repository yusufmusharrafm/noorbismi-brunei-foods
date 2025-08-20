import streamlit as st

# Page settings
st.set_page_config(page_title="Noor Bismi Brunei Foods", page_icon="🍴", layout="wide")

# Title
st.title("🍴 Noor Bismi Brunei Foods")
st.write("Welcome to our official website! Bringing authentic Brunei flavors with love ❤️")

# About Section
st.header("About Us")
st.write("""
Noor Bismi Brunei Foods is dedicated to providing authentic Brunei flavors.  
We believe in quality, taste, and tradition — delivering happiness with every meal.
""")

# Products Section
st.header("Our Products")
cols = st.columns(3)
with cols[0]:
    st.image("https://images.unsplash.com/photo-1600891964599-f61ba0e24092", caption="Traditional Dish", use_container_width=True)
with cols[1]:
    st.image("https://images.unsplash.com/photo-1504674900247-0877df9cc836", caption="Brunei Snacks", use_container_width=True)
with cols[2]:
    st.image("https://images.unsplash.com/photo-1525755662778-989d0524087e", caption="Delicious Meals", use_container_width=True)

# Contact Section
st.header("Contact Us")
st.write("📧 Email: info@noorbismi.com")
st.write("📍 Location: Brunei")
st.write("📞 Phone: +673 123 4567")
