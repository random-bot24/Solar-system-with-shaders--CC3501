#version 330

//Escriba aquí el color shader
//Debe considerar el material del objeto para obtener el color
//Mire como obtener el material en el Phong shader


in vec2 fragTexCoord;
out vec4 outColor;

// Material
struct Material {
    vec3 diffuse;
    vec3 ambient;
    vec3 specular;
    float shininess;
};

uniform Material u_material;
vec3 diffuse = u_material.diffuse;
vec3 ambient =u_material.ambient;
vec3 specular= u_material.specular;
float shininess = u_material.shininess;
void main() {
    // Solo usamos el color difuso del material para el color de salida
    vec3 result = (ambient+specular+diffuse)*shininess;
    
    outColor = vec4(result, 1.0f); // La componente alpha se deja en 1.0 (completamente opaco)
}
